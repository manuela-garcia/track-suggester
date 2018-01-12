$(document).ready(function() {
  var introCompleted = confirm("Have you completed Intro to Programming? Click OK for YES or Cancel for NO.");

  if (introCompleted) {
    $('#yes-intro').show();
  } else {
    alert("SORRY!! You must complete the Intro to Programming first before you can move on to study any of the programming languages offered by Epidocus");
  }

// the following would be the way to read the value selected. The following commands are not doing anything at the moment.

var design = $("input:radio[name=design]:checked").val();

var largeCompany = $("input:radio[name=design]:checked").val();

var android = $("input:radio[name=design]:checked").val();

var government = $("input:radio[name=design]:checked").val();

var startup = $("input:radio[name=design]:checked").val();

// Again: all these variables are not being read at the moment. I would like to continue working on this when we learn about arrays.

});
