$(document).ready(function() {
  var introCompleted = confirm("Have you completed Intro to Programming? Click OK for YES or Cancel for NO.");

  if (introCompleted) {
    $('#yes-intro').show();
  } else {
    alert("SORRY!! You must complete the Intro to Programming first before you can move on to any of the programming languages offered by Epidocus");
  }

// the following would be the way to read the value selected

var design = $("input:radio[name=design]:checked").val();

});
