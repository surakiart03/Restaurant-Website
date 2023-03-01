<?php defined('ABSPATH') || die; ?>

<div id="titlediv">
    <input type="text" id="title" value="<?= $post->post_title ? esc_attr($post->post_title) : sprintf('(%s)', esc_attr_x('no title', 'admin-text', 'site-reviews')); ?>" readonly>
</div>

<div id="contentdiv" class="wp-editor-container">
    <textarea readonly><?= esc_attr($post->post_content); ?></textarea>
</div>

<?php if (empty($response)) {
    return;
} ?>

<div class="postbox glsr-response-postbox">
    <button type="button" class="handlediv" aria-expanded="true">
        <span class="screen-reader-text"><?= _x('Toggle panel: Public Response', 'admin-text', 'site-reviews'); ?></span>
        <span class="toggle-indicator" aria-hidden="true"></span>
    </button>
    <h2 class="hndle">
        <span><?= _x('Public Response', 'admin-text', 'site-reviews'); ?></span>
    </h2>
    <div class="inside">
        <?= wpautop(esc_attr($response)); ?>
    </div>
</div>
