<?php get_header(); ?>
<div class="wrap">
<div class="crumbs"><a href="<?php echo esc_url(home_url('/')); ?>">Trang chủ</a><span>/</span><?php the_title(); ?></div>
<div class="layout"><main>
<?php while (have_posts()) : the_post(); ?>
  <article class="card entry"><h1><?php the_title(); ?></h1><?php the_content(); ?></article>
<?php endwhile; ?>
</main><?php get_sidebar(); ?></div></div>
<?php get_footer(); ?>
