<?php

namespace GeminiLabs\SiteReviews\Controllers;

use GeminiLabs\SiteReviews\Commands\EnqueueAdminAssets;
use GeminiLabs\SiteReviews\Commands\ExportRatings;
use GeminiLabs\SiteReviews\Commands\ImportRatings;
use GeminiLabs\SiteReviews\Commands\RegisterTinymcePopups;
use GeminiLabs\SiteReviews\Commands\TogglePinned;
use GeminiLabs\SiteReviews\Commands\ToggleStatus;
use GeminiLabs\SiteReviews\Database;
use GeminiLabs\SiteReviews\Helpers\Arr;
use GeminiLabs\SiteReviews\Install;
use GeminiLabs\SiteReviews\Modules\Html\Builder;
use GeminiLabs\SiteReviews\Modules\Notice;
use GeminiLabs\SiteReviews\Modules\Translation;
use GeminiLabs\SiteReviews\Request;

class AdminController extends Controller
{
    /**
     * @return void
     * @action site-reviews/export/cleanup
     */
    public function cleanupAfterExport()
    {
        glsr(Database::class)->deleteMeta(glsr()->export_key);
    }

    /**
     * @return void
     * @action admin_enqueue_scripts
     */
    public function enqueueAssets()
    {
        $this->execute(new EnqueueAdminAssets());
    }

    /**
     * @return array
     * @filter plugin_action_links_site-reviews/site-reviews.php
     */
    public function filterActionLinks(array $links)
    {
        if (glsr()->hasPermission('settings')) {
            $links['settings'] = glsr(Builder::class)->a([
                'href' => admin_url('edit.php?post_type='.glsr()->post_type.'&page=settings'),
                'text' => _x('Settings', 'admin-text', 'site-reviews'),
            ]);
        }
        if (glsr()->hasPermission('documentation')) {
            $links['documentation'] = glsr(Builder::class)->a([
                'href' => admin_url('edit.php?post_type='.glsr()->post_type.'&page=documentation'),
                'text' => _x('Help', 'admin-text', 'site-reviews'),
            ]);
        }
        return $links;
    }

    /**
     * @param array $capabilities
     * @param string $capability
     * @return array
     * @filter map_meta_cap
     */
    public function filterCreateCapability($capabilities, $capability)
    {
        if ($capability == 'create_'.glsr()->post_type) {
            $capabilities[] = 'do_not_allow';
        }
        return $capabilities;
    }

    /**
     * @param array $items
     * @return array
     * @filter dashboard_glance_items
     */
    public function filterDashboardGlanceItems($items)
    {
        $postCount = wp_count_posts(glsr()->post_type);
        if (empty($postCount->publish)) {
            return $items;
        }
        $text = _nx('%s Review', '%s Reviews', $postCount->publish, 'admin-text', 'site-reviews');
        $text = sprintf($text, number_format_i18n($postCount->publish));
        $items = Arr::consolidate($items);
        if (glsr()->can('edit_posts')) {
            $items[] = glsr(Builder::class)->a($text, [
                'class' => 'glsr-review-count',
                'href' => 'edit.php?post_type='.glsr()->post_type,
            ]);
        } else {
            $items[] = glsr(Builder::class)->span($text, [
                'class' => 'glsr-review-count',
            ]);
        }
        return $items;
    }

    /**
     * @param array $args
     * @return array
     * @filter export_args
     */
    public function filterExportArgs($args)
    {
        if (in_array(Arr::get($args, 'content'), ['all', glsr()->post_type])) {
            $this->execute(new ExportRatings(glsr()->args($args)));
        }
        return $args;
    }

    /**
     * @param array $plugins
     * @return array
     * @filter mce_external_plugins
     */
    public function filterTinymcePlugins($plugins)
    {
        if (glsr()->can('edit_posts')) {
            $plugins = Arr::consolidate($plugins);
            $plugins['glsr_shortcode'] = glsr()->url('assets/scripts/mce-plugin.js');
        }
        return $plugins;
    }

    /**
     * @return void
     * @action admin_init
     */
    public function onActivation()
    {
        if (empty(get_option(glsr()->prefix.'activated'))) {
            glsr(Install::class)->run();
            update_option(glsr()->prefix.'activated', true);
        }
    }

    /**
     * @return void
     * @action import_end
     */
    public function onImportEnd()
    {
        $this->execute(new ImportRatings());
    }

    /**
     * @return void
     * @action admin_head
     */
    public function printInlineStyle()
    {
        echo '<style type="text/css">a[href="edit.php?post_type=site-review&page=addons"]:not(.current):not(:hover) { color:#F6E05E!important; }</style>';
    }

    /**
     * @return void
     * @action admin_init
     */
    public function registerTinymcePopups()
    {
        $this->execute(new RegisterTinymcePopups([
            'site_reviews' => _x('Recent Reviews', 'admin-text', 'site-reviews'),
            'site_reviews_form' => _x('Submit a Review', 'admin-text', 'site-reviews'),
            'site_reviews_summary' => _x('Summary of Reviews', 'admin-text', 'site-reviews'),
        ]));
    }

    /**
     * @param string $editorId
     * @return void|null
     * @action media_buttons
     */
    public function renderTinymceButton($editorId)
    {
        $allowedEditors = glsr()->filterArray('tinymce/editor-ids', ['content'], $editorId);
        if ('post' !== glsr_current_screen()->base || !in_array($editorId, $allowedEditors)) {
            return;
        }
        $shortcodes = [];
        foreach (glsr()->retrieve('mce', []) as $shortcode => $values) {
            $shortcodes[$shortcode] = $values;
        }
        if (empty($shortcodes)) {
            return;
        }
        glsr()->render('partials/editor/tinymce', [
            'shortcodes' => $shortcodes,
        ]);
    }

    /**
     * @return void
     * @action site-reviews/route/ajax/search-posts
     */
    public function searchPostsAjax(Request $request)
    {
        $results = glsr(Database::class)->searchPosts($request->search);
        wp_send_json_success([
            'empty' => '<div>'._x('Nothing found.', 'admin-text', 'site-reviews').'</div>',
            'items' => $results,
        ]);
    }

    /**
     * @return void
     * @action site-reviews/route/ajax/search-translations
     */
    public function searchTranslationsAjax(Request $request)
    {
        if (empty($request->exclude)) {
            $request->exclude = [];
        }
        $results = glsr(Translation::class)
            ->search($request->search)
            ->exclude()
            ->exclude($request->exclude)
            ->renderResults();
        wp_send_json_success([
            'empty' => '<div>'._x('Nothing found.', 'admin-text', 'site-reviews').'</div>',
            'items' => $results,
        ]);
    }

    /**
     * @return void
     * @action site-reviews/route/ajax/search-users
     */
    public function searchUsersAjax(Request $request)
    {
        $results = glsr(Database::class)->searchUsers($request->search);
        wp_send_json_success([
            'empty' => '<div>'._x('Nothing found.', 'admin-text', 'site-reviews').'</div>',
            'items' => $results,
        ]);
    }

    /**
     * @return void
     * @action site-reviews/route/ajax/toggle-pinned
     */
    public function togglePinnedAjax(Request $request)
    {
        wp_send_json_success([
            'notices' => glsr(Notice::class)->get(),
            'pinned' => $this->execute(new TogglePinned($request->toArray())),
        ]);
    }

    /**
     * @return void
     * @action site-reviews/route/ajax/toggle-status
     */
    public function toggleStatusAjax(Request $request)
    {
        wp_send_json_success(
            $this->execute(new ToggleStatus($request->post_id, $request->status))
        );
    }
}
