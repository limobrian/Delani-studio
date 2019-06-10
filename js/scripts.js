$(document).ready(function () {
  $("#userInputs").submit(function (event) {
    var name = $("#fName").val();
    if (name != "") {
      alert(name + " thanks for sending a message.");
    } else {
      alert("Please fill in your details");
    }
    event.preventDefault();
  });

  //TOGGLE
  $('.cont1').hide()
  $('#tog1').click(function () {
    $('.cont1').toggle();
    $('.cont1').click(function () {
      $('#tog1').toggle();
    });
  });
  $('.cont2').hide()
  $('#tog2').click(function () {
    $('.cont2').toggle();
    $('.cont2').click(function () {
      $('#tog2').toggle();
    });
  });
  $('.cont3').hide()
  $('#tog3').click(function () {
    $('.cont3').toggle();
    $('.cont3').click(function () {
      $('#tog3').toggle();
    });
  });
});