$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var firstSide = $("#firstSide").val();
    var secondSide = $("#secondSide").val();
    var thirdSide = $("#thirdSide").val();

    // if (firstSide === "") {
    //   $("#error1").text("error");
    // }
    // if (secondSide === "") {
    //   $("#error2").text("error");
    // }
    // if (thirdSide === "") {
    //   $("#error3").text("error");
    // }

    firstSide = parseInt(firstSide);
    secondSide = parseInt(secondSide);
    thirdSide = parseInt(thirdSide);

    if ((firstSide > (secondSide + thirdSide)) || (secondSide > (firstSide + thirdSide)) || (thirdSide > (secondSide + firstSide))) {
      $(".result").text("non-existant");
    }
    else if ((firstSide === 0) || (secondSide === 0) || (thirdSide === 0)){
      $(".result").text("non-existant");
    }
    else if ((firstSide === secondSide) && (secondSide === thirdSide)){
      $(".result").text("Equilateral");
    }
    else if ((firstSide === secondSide) || (secondSide === thirdSide) || (firstSide === thirdSide)){
      $(".result").text("Icosceles");
    }
    else {
      $(".result").text("Scalene");
    }
    $("#result").show();

    event.preventDefault();
  });
});
