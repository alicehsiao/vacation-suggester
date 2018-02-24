//Business (Back End) Logic
var vacationMatch = function (number) {
  if (number <= 7) {
    return "snow";
  } else if (number <= 12) {
    return "city";
  } else if (number <= 17) {
    return "nature";
  } else if (number <= 20) {
    return "beach";
  }
};

//User Interface (Front End) Logic
$(document).ready(function() {
  $("form#survey").submit(function() {
    event.preventDefault();
    var name = $("#name").val();
    var number1 = parseInt($("#season").val());
    var number2 = parseInt($("#activity").val());
    var number3 = parseInt($("#accommodation").val());
    var number4 = parseInt($("#transportation").val());
    var number5 = parseInt($("#nightlife").val());
    var sum = number1 + number2 + number3 + number4 + number5;
    var result = vacationMatch(sum);

    if (result === "nature") {
      $(".output").text(result);
      $(".name").text(name);
      $("#nature").fadeIn().show();
    } else if (result === "city") {
      $(".output").text(result);
      $(".name").text(name);
      $("#city").fadeIn().show();
    } else if (result === "snow") {
      $(".output").text(result);
      $(".name").text(name);
      $("#snow").fadeIn().show();
    } else if (result === "beach") {
      $(".output").text(result);
      $(".name").text(name);
      $("#beach").fadeIn().show();
    }
  });
});
