$(function () {
  $.ajax({
    url: "./json/slider.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          $(".sliderBox").append(
            "<li><a href=" +
              data[i].href +
              ">" +
              "<img src=" +
              data[i].src +
              " alt=" +
              data[i].alt +
              "></a></li>"
          );
        }
      }
    },
  });
});
