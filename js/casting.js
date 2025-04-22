$(function () {
  let i = 0;

  // next 버튼 function
  function next() {
    i++;
    if (i > $(".casting_books li:last").index()) {
      i = 0;
    }
    $(".casting_books")
      .filter(":not(:animated)")
      .stop()
      .animate({ marginLeft: -200 }, function () {
        $(".casting_books").css("margin-left", 0);
        $(".casting_books li:first").appendTo(".casting_books");
      });
  }

  function prev() {
    $(".casting_books li:last").prependTo(".casting_books");
    $(".casting_books").css("margin-left", -200);
    $(".casting_books").stop().animate({ marginLeft: 0 });
  }

  $("#casting .btn_left").click(function () {
    prev();
  });
  $("#casting .btn_right").click(function () {
    next();
  });

  $.ajax({
    url: "./json/casting.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          $(".casting_books").append(
            `<li><a href="sub.html"><img src="${data[i].src}" alt="${data[i].alt}}"><span>${data[i].title}</span></a></li>`
          );
        }
      }
    },
  });
});
