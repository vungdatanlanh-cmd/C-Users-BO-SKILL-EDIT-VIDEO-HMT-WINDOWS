<?php
if (!defined('ABSPATH')) exit;

add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'gallery', 'caption']);
    register_nav_menus(['primary' => 'Menu chính']);
});

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('ptdv', get_stylesheet_uri(), [], '1.0.0');
    if (is_page_template('page-lap-la-so-tu-vi.php')) {
        $u = get_template_directory_uri() . '/assets/js/';
        wp_enqueue_script('tuvi-core', $u . 'tuvi-core.js', [], '1.0.0', true);
        wp_enqueue_script('tuvi-ui', $u . 'tuvi-ui.js', ['tuvi-core'], '1.0.0', true);
    }
});

add_action('widgets_init', function () {
    register_sidebar([
        'name' => 'Danh mục bên phải', 'id' => 'side',
        'before_widget' => '<div class="widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ]);
});

/* Tạo trang "Lập lá số tử vi" khi kích hoạt theme. */
add_action('after_switch_theme', function () {
    if (!get_page_by_path('lap-la-so-tu-vi')) {
        $id = wp_insert_post([
            'post_title' => 'Lập lá số tử vi', 'post_name' => 'lap-la-so-tu-vi',
            'post_status' => 'publish', 'post_type' => 'page',
        ]);
        if ($id && !is_wp_error($id)) update_post_meta($id, '_wp_page_template', 'page-lap-la-so-tu-vi.php');
    }
});

function ptdv_default_menu() {
    echo '<ul>';
    echo '<li><a href="' . esc_url(home_url('/')) . '">Trang chủ</a></li>';
    echo '<li><a href="' . esc_url(home_url('/lap-la-so-tu-vi/')) . '">Lập lá số tử vi</a></li>';
    echo '</ul>';
}

function ptdv_sidebar_fallback() {
    echo '<div class="widget"><h3 class="widget-title">Danh mục</h3><ul>';
    echo '<li><a href="' . esc_url(home_url('/lap-la-so-tu-vi/')) . '">Lập lá số tử vi <span class="hot">Hot!</span></a></li>';
    wp_list_categories(['title_li' => '', 'number' => 12]);
    echo '</ul></div>';
}
