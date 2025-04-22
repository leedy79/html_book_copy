$(function () {
  let i = 0;

  // next 버튼 function
  function next() {
    i++;
    if (i > $(".hankang_books li:last").index()) {
      i = 0;
    }
    $(".hankang_books")
      .filter(":not(:animated)")
      .stop()
      .animate({ marginLeft: -200 }, function () {
        $(".hankang_books").css("margin-left", 0);
        $(".hankang_books li:first").appendTo(".hankang_books");
      });
  }

  function prev() {
    $(".hankang_books li:last").prependTo(".hankang_books");
    $(".hankang_books").css("margin-left", -200);
    $(".hankang_books").stop().animate({ marginLeft: 0 });
  }

  $("#hankang .btn_left").click(function () {
    prev();
  });
  $("#hankang .btn_right").click(function () {
    next();
  });

  //한강 신작 산문집이 곧 출간돼요
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c000c8f0567b80693a5c45dd602124d2" },
    data: { query: "한강" },
  }).done(function (msg) {
    $(".hankang_books li").each(function (i) {
      let img = msg.documents[i].thumbnail;
      let title = msg.documents[i].title;

      if (title.length > 40) {
        var result = title.substring(0, 40) + "...";
      } else {
        var result = title;
      }

      $(this).append(
        `<a href="sub.html"><img src="${img}" alt="today_${i}"><span>${result}</span></a>`
      );
      $("img").on("error", function () {
        $(this).attr("src", "img/error.png");
      });
    });
  });
});
