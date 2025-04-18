$(function () {
  $.ajax({
    url: "./json/product.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          if (data[i].class) {
            $(".${data[i].class}").append(
              "<li><a href=" +
                data[i].href +
                ">" +
                data[i].content +
                "</a></li>" +
                "<img class=" +
                data[i].class +
                " src=" +
                data[i].src +
                " alt=" +
                data[i].alt +
                "></li>"
            );
          } else {
            $(".navi_cat").append(
              "<a href=" +
                data[i].href +
                ">" +
                "<div class=" +
                data[i].class +
                ">" +
                "<p>" +
                data[i].content +
                "</p>" +
                "<img src=" +
                data[i].src +
                " alt=" +
                data[i].alt +
                "></div></a>"
            );
          }
        }
      }
    },
  });
});
