$(document).ready(function() {
  $("#equilateral, #isosceles, #scalene, #none").hide();
  $("form#sumofangles").submit(function(event) {
    event.preventDefault();
    const angle1 = parseInt($("input#angle1").val());
    const angle2 = parseInt($("input#angle2").val());
    const angle3 = parseInt($("input#angle3").val());
    const sumofangles = angle1 + angle2 + angle3;
    console.log(sumofangles)

    if (sumofangles !== 180 || angle1 === 0 || angle2 === 0 || angle3 === 0) {
      $('#none').show();
    }

    else {
      if (angle1 === angle2 && angle2 === angle3) {
        $('#equilateral').show();
      }
      if (angle1 !== angle2 && angle2 === angle3) {
        $('#isosceles').show();
        console.log("isosceles");
      }

      if (angle1 === angle2 && angle2 !== angle3) {
        $('#isosceles').show();
        console.log("isosceles");
      }
      if (angle1 !== angle2 && angle2 !== angle3 && angle1 !== angle3) {
        $('#scalene').show();
        console.log("scalene");
      }
    }
  });
});


// 1. Input three numbers
// 2. Measure the total sum of the three numbers
// 3. If the sum does NOT equal 180, then not a trianglename
// 4. If the sum DOES equal 180, it loops through?

// if angle1 = angle2 = angle 3, then result is Equilateral
// if angle1 = angel2 OR angle2 = angle3, then result is Isosceles
// if none of the angels equal the others, result is Scalene
// push result to html
