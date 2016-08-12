$(document).ready(function() {
  $("#quiz").submit(function() {

    var PHP = 0;
    var CSS = 0;
    var Java = 0;

    var input1 = $("#mc1").val();

    if (input1 === "1") {
      $(PHP += 1);
    }
    else if (input1 === "2") {
      $(CSS += 1);
    }
    else if (input1 === "3") {
      $(Java += 1);
    }
    alert(PHP)
    alert(CSS)
    alert(Java)
  });
});
