$(function () {
  // 카테고리 관련
  // default style (첫번째 카테고리에 스타일 적용)
  $("#md_suggestion .tap_left_nav a:first").addClass("changed");
  $("#md_suggestion .tap_left_nav a:first").css({
    "font-weight": "700",
    color: "#474c98",
  });

  // 카테고리 누르면 수행할 이벤트
  $("#md_suggestion .tap_left_nav a").click(function (e) {
    e.preventDefault();
    $("#md_suggestion .tap_left_nav a").css({
      "font-weight": "400",
      color: "#767676",
    });
    $(this).css({ "font-weight": "700", color: "#474c98" });
    $("#md_suggestion .tap_left_nav a").removeClass("changed");
    $(this).addClass("changed");
  });

  // 슬라이드 관련
  //default style
  $("#topic1").siblings().hide();

  // 멀티 페이지 (카테고리 누르면 이동)
  $("#md_suggestion .tap_left_nav li").click(function () {
    let i = $(this).index() + 1;
    $("#topic" + i)
      .show()
      .siblings()
      .hide();
    $("#topic" + i)
      .addClass("now")
      .siblings()
      .removeClass("now");
  });

  // next 버튼 function
  function next() {
    let i = $("#md_suggestion .now").index() + 1; //todaySmall 뒤에 들어가는 숫자를 표현하기 위함)
    $("#topic" + i)
      .stop()
      .animate({ marginLeft: -180 }, function () {
        $("#topic" + i).css("margin-left", 0);
        $("#topic" + i + ">li:first").appendTo("#topic" + i);
      });
  }

  function prev() {
    let i = $("#md_suggestion .now").index() + 1;
    $("#topic" + i + ">li:last").prependTo("#topic" + i);
    $("#topic" + i).css("margin-left", -180);
    $("#topic" + i)
      .filter(":not(:animated)")
      .stop()
      .animate({ marginLeft: 0 });
  }

  $("#md_suggestion .btn_left").click(function () {
    prev();
  });
  $("#md_suggestion .btn_right").click(function () {
    next();
  });

  //MD들이 신중하게 골랐어요: 국내도서
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c000c8f0567b80693a5c45dd602124d2" },
    data: { query: "국내" },
  }).done(function (msg) {
    $("#topic1 li").each(function (i) {
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

  //MD들이 신중하게 골랐어요: 외국도서
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c000c8f0567b80693a5c45dd602124d2" },
    data: { query: "해외" },
  }).done(function (msg) {
    $("#topic2 li").each(function (i) {
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

  //MD들이 신중하게 골랐어요: 외국도서
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c000c8f0567b80693a5c45dd602124d2" },
    data: { query: "성공" },
  }).done(function (msg) {
    $("#topic3 li").each(function (i) {
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
  //MD들이 신중하게 골랐어요: 외국도서
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c000c8f0567b80693a5c45dd602124d2" },
    data: { query: "도전" },
  }).done(function (msg) {
    $("#topic4 li").each(function (i) {
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
  //MD들이 신중하게 골랐어요: 외국도서
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c000c8f0567b80693a5c45dd602124d2" },
    data: { query: "미래" },
  }).done(function (msg) {
    $("#topic5 li").each(function (i) {
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
  //MD들이 신중하게 골랐어요: 외국도서
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c000c8f0567b80693a5c45dd602124d2" },
    data: { query: "희망" },
  }).done(function (msg) {
    $("#topic6 li").each(function (i) {
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
