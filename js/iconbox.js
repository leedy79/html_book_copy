$(function () {
  $.ajax({
    url: "./json/iconbox.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          $(".iconbox").append(
            "<a href=" +
              data[i].href +
              ">" +
              "<img class=" +
              data[i].class +
              " src=" +
              data[i].src +
              " alt=" +
              data[i].alt +
              "></a>"
          );
        }
      }
    },
  });
});
