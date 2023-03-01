<?php defined('ABSPATH') || die; ?>

<div class="wrap">
    <h1 class="wp-heading-inline"><?= esc_html(get_admin_page_title()); ?></h1>
    <?= $notices; ?>
    <nav class="glsr-nav-tab-wrapper nav-tab-wrapper">
        <?php foreach ($tabs as $id => $title) : ?>
        <a class="glsr-nav-tab nav-tab" href="#<?= $id; ?>" tabindex="0"><?= $title; ?></a>
        <?php endforeach; ?>
    </nav>
    <form class="glsr-form" action="options.php" enctype="multipart/form-data" method="post">
        <?php foreach ($tabs as $id => $title) : ?>
        <div class="glsr-nav-view ui-tabs-hide" id="<?= $id; ?>">
            <?= $settings->buildFields($id); ?>
        </div>
        <?php endforeach; ?>
        <input type="hidden" name="_active_tab">
        <?php settings_fields(glsr()->id.'-settings'); ?>
        <?php submit_button(); ?>
    </form>
</div>
