<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width,initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="site-head"><div class="wrap">
  <a class="site-title" href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?><small><?php bloginfo('description'); ?></small></a>
  <nav class="main-nav"><?php wp_nav_menu(['theme_location' => 'primary', 'container' => false, 'fallback_cb' => 'ptdv_default_menu']); ?></nav>
</div></header>
