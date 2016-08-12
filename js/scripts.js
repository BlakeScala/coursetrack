$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();

    var PHP = 0;
    var CSS = 0;
    var Java = 0;

    var answer1 = $("#mc1").val();
    var nameInput = $("input#name").val();

    $("span#studentname").text(nameInput);

    if (answer1 === "1") {
      $(PHP += 1);
    }
    else if (answer1 === "2") {
      $(Java += 1);
    }
    else if (answer1 === "3") {
      $(CSS += 1);
    }

    var answer2 = $("#mc2").val();

    if (answer2 === "1") {
      $(CSS += 2);
    }
    else if (answer2 ==="2") {
      $(Java += 1);
      $(PHP += 1);
    }

    var answer3 = $("#mc3").val();

    if (answer3 === "1") {
      $(PHP += 1);
    }
    else if (answer3 ==="2") {
      $(Java += 1);
    }

    var answer4 = $("#mc4").val();

    if (answer4 === "1") {
      $(CSS += 1);
      $(PHP += 1);
    }
    else if (answer4 ==="2") {
      $(Java += 1);
    }

    var answer5 = $("#mc5").val();

    if (answer5 === "1") {
      $(Java += 3);
      $(PHP += 3);
    }
    else if (answer5 ==="2") {
      $(CSS += 3);
    }
    
    if (PHP > CSS && PHP > Java) {
      $("#phpdiv").show();
      $("#cssdiv").hide();
      $("#javadiv").hide();
    }
    else if (CSS > PHP && CSS > Java) {
      $("#cssdiv").show();
      $("#phpdiv").hide();
      $("#javadiv").hide();
    }
    else if (Java > PHP && Java > CSS) {
      $("#javadiv").show();
      $("#phpdiv").hide();
      $("#cssdiv").hide();
    }
  });
});
