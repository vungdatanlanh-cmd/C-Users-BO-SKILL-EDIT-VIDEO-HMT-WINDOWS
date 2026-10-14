<?php
/* Template Name: Lập lá số tử vi */
get_header(); ?>
<div class="wrap">
<div class="crumbs"><a href="<?php echo esc_url(home_url('/')); ?>">Trang chủ</a><span>/</span><a href="#">Xem tử vi</a><span>/</span>Lập lá số tử vi</div>
<div class="layout"><main>
  <section class="scroll">
    <div class="scroll-title">Lập lá số Tử Vi</div>
    <form id="tv-form" class="tv-form" autocomplete="off">
      <label class="f" for="tv-name">Họ Tên</label>
      <input type="text" id="tv-name" name="name" placeholder="Nhập họ tên..." maxlength="60">

      <label class="f">Ngày sinh</label>
      <div class="row c3">
        <select name="day" aria-label="Ngày"></select>
        <select name="month" aria-label="Tháng"></select>
        <input type="number" name="year" min="1900" max="2100" aria-label="Năm">
      </div>
      <div class="radios">
        <label><input type="radio" name="cal" value="duong" checked> Lịch dương</label>
        <label><input type="radio" name="cal" value="am"> Lịch âm</label>
      </div>

      <label class="f">Giờ sinh</label>
      <div class="row c3">
        <select name="tz" aria-label="Múi giờ"><option>GMT +7</option></select>
        <select name="hour" aria-label="Giờ"></select>
        <select name="minute" aria-label="Phút"></select>
      </div>

      <label class="f">Giới tính</label>
      <div class="radios">
        <label><input type="radio" name="gender" value="nam" checked> Nam</label>
        <label><input type="radio" name="gender" value="nu"> Nữ</label>
      </div>

      <div class="row c2">
        <div><label class="f">Năm xem</label><select name="viewYear"></select></div>
      </div>
      <div class="submit"><button class="btn" type="submit">Lập lá số</button></div>
    </form>
  </section>
  <div id="tv-result" hidden></div>
  <?php while (have_posts()) : the_post(); if (get_the_content()) : ?><article class="card entry"><?php the_content(); ?></article><?php endif; endwhile; ?>
</main><?php get_sidebar(); ?></div></div>
<?php get_footer(); ?>
