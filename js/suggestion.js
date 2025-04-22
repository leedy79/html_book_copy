$(function () {
  let i = 0;
  //출판사에서 자신있게 추천해요
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: "KakaoAK c000c8f0567b80693a5c45dd602124d2" },
    data: { query: "추천" },
  }).done(function (msg) {
    $(".suggestion_books li").each(function (i) {
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
