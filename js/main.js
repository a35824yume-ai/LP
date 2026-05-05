
// .accordion
$(function(){
  //.accordionの中の.accordion-headerがクリックされたら
  $('.accordion .accordion-header').click(function(){
    //クリックされた.accordionの中の.accordion-headerに隣接する.accordion-contentが開いたり閉じたりする。
    $(this).next().slideToggle();
    $(this).toggleClass("active");
  });
});



$(function () {
  /*=================================================
スクロール時の画像フェード表示
===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 150) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(20)");
      }
    });
  });
});
