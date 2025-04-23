$(function () {
  let i = 0;

  // next 버튼 function
  function next() {
    i++;
    if (i > $(".possible_kyobo_books li:last").index()) {
      i = 0;
    }
    $(".possible_kyobo_books")
      .filter(":not(:animated)")
      .stop()
      .animate({ marginLeft: -200 }, function () {
        $(".possible_kyobo_books").css("margin-left", 0);
        $(".possible_kyobo_books li:first").appendTo(".possible_kyobo_books");
      });
  }

  function prev() {
    $(".possible_kyobo_books li:last").prependTo(".possible_kyobo_books");
    $(".possible_kyobo_books").css("margin-left", -200);
    $(".possible_kyobo_books").stop().animate({ marginLeft: 0 });
  }

  $("#possible_kyobo .btn_left").click(function () {
    prev();
  });
  $("#possible_kyobo .btn_right").click(function () {
    next();
  });

  //한강 신작 산문집이 곧 출간돼요
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c000c8f0567b80693a5c45dd602124d2" },
    data: { query: "인생" },
  }).done(function (msg) {
    $(".possible_kyobo_books li").each(function (i) {
      let img = msg.documents[i].thumbnail;
      let title = msg.documents[i].title;

      if (title.length > 40) {
        var result = title.substring(0, 40) + "...";
      } else {
        var result = title;
      }

      $(this).append(
        `<a href="sub.html"><img src="${img}" alt="possible_kyobo${i}"><span>${result}</span></a>`
      );
      $("img").on("error", function () {
        $(this).attr("src", "img/error.png");
      });
    });
  });
});
