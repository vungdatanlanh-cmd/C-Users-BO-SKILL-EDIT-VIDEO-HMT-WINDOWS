<?php get_header(); ?>
<div class="wrap"><div class="layout"><main>
<?php if (have_posts()) : ?>
  <div class="posts">
  <?php while (have_posts()) : the_post(); ?>
    <article class="post-card">
      <?php if (has_post_thumbnail()) the_post_thumbnail('medium_large'); ?>
      <div class="pad"><h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
      <div><?php echo esc_html(wp_trim_words(get_the_excerpt(), 28)); ?></div></div>
    </article>
  <?php endwhile; ?>
  </div>
  <div style="margin-top:20px"><?php the_posts_pagination(); ?></div>
<?php else : ?><div class="card">Chưa có bài viết.</div><?php endif; ?>
</main><?php get_sidebar(); ?></div></div>
<?php get_footer(); ?>
