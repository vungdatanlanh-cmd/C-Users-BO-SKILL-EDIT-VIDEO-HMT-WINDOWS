<?php get_header(); ?>
<section class="hero"><div class="wrap">
  <h1>Xem tử vi – Phong thủy</h1>
  <p>Lập lá số tử vi, xem vận hạn và tra cứu phong thủy nhà ở, ngày giờ tốt.</p>
  <a class="btn" href="<?php echo esc_url(home_url('/lap-la-so-tu-vi/')); ?>">Lập lá số ngay</a>
</div></section>
<div class="wrap">
  <div class="tools">
    <a class="tool" href="<?php echo esc_url(home_url('/lap-la-so-tu-vi/')); ?>"><b>Lập lá số tử vi <span class="hot">Hot!</span></b>Lá số 12 cung, chính tinh, tứ hóa, đại hạn.</a>
    <a class="tool" href="<?php echo esc_url(home_url('/')); ?>"><b>Phong thủy nhà ở</b>Chọn hướng nhà, bố trí theo mệnh.</a>
    <a class="tool" href="<?php echo esc_url(home_url('/')); ?>"><b>Xem ngày tốt</b>Chọn ngày giờ cho việc lớn.</a>
    <a class="tool" href="<?php echo esc_url(home_url('/')); ?>"><b>Cân xương tính số</b>Tra theo năm, tháng, ngày, giờ sinh.</a>
  </div>
  <h2 style="font-family:Georgia,serif;color:var(--red)">Bài viết mới</h2>
  <div class="posts">
  <?php $q = new WP_Query(['posts_per_page' => 6]); while ($q->have_posts()) : $q->the_post(); ?>
    <article class="post-card">
      <?php if (has_post_thumbnail()) the_post_thumbnail('medium_large'); ?>
      <div class="pad"><h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
      <div><?php echo esc_html(wp_trim_words(get_the_excerpt(), 24)); ?></div></div>
    </article>
  <?php endwhile; wp_reset_postdata(); ?>
  </div>
  <div style="height:40px"></div>
</div>
<?php get_footer(); ?>
