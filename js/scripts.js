$(document).ready(function() {

  var introCompleted = confirm("Have you completed Intro to Programming? Click OK for YES or Cancel for NO.");

  if (introCompleted) {
    $('#yes-intro').show();
  } else {
    alert("SORRY!! You must complete the Intro to Programming first before you can move on to study any of the programming languages offered by Epidocus");
  }

  $("button#yes-design-button").click(function() {
    $('#yes-design').toggle();
  });

  $("button#no-design-button").click(function() {
    $('#no-design').toggle();
  });

  $("button#yes-largeCompany-button").click(function() {
    $('#yes-largeCompany').toggle();
  });

  $("button#no-largeCompany-button").click(function() {
    $('#no-largeCompany').toggle();
  });

  $("button#yes-android-button").click(function() {
    $('#yes-android').toggle();
  });

  $("button#no-android-button").click(function() {
    $('#no-android').toggle();
  });

  $("button#yes-government-button").click(function() {
    $('#yes-government').toggle();
  });

  $("button#no-government-button").click(function() {
    $('#no-government').toggle();
  });

  $("button#yes-startup-button").click(function() {
    $('#yes-startup').toggle();
  });

  $("button#no-startup-button").click(function() {
    $('#no-startup').toggle();
  });

});
