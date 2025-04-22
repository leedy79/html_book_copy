$(function () {
  // 카테고리 관련
  // default style (첫번째 카테고리에 스타일 적용)
  $("#event .tap_left_nav a:first").addClass("changed");
  $("#event .tap_left_nav a:first").css({
    "font-weight": "700",
    color: "#474c98",
  });

  // 카테고리 누르면 수행할 이벤트
  $("#event .tap_left_nav a").click(function (e) {
    e.preventDefault();
    $("#event .tap_left_nav a").css({
      "font-weight": "400",
      color: "#767676",
    });
    $(this).css({ "font-weight": "700", color: "#474c98" });
    $("#event .tap_left_nav a").removeClass("changed");
    $(this).addClass("changed");
  });

  // 슬라이드 관련
  //default style
  $("#topic1").siblings().hide();

  // 멀티 페이지 (카테고리 누르면 이동)
  $("#event .tap_left_nav li").click(function () {
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

  $.ajax({
    url: "./json/event.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        const productKeys = Object.keys(data[0]);
        for (let product of productKeys) {
          data[0][product].forEach((p) => {
            $(`#event #${product}`).append(
              `<a href="${p.href}">
                  <img src="${p.src}" alt="${p.alt}">
                </a>`
            );
          });
        }
      }
    },
  });
});
