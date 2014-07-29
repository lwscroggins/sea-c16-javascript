$(document).ready(function() {
  $(".nav li:first").addClass('tabSelected');
  $('div[id^="ultima-"]').hide();
  $("#ultima-0").show();
  var gameOrder = 0;

  $(".tab").click(function() {
    gameOrder = $(this).val();
    $(".tab").removeClass("tabSelected");
    $(this).addClass("tabSelected");

    $(".articleContainer").hide(); 
    $("#ultima-" + gameOrder).fadeIn(); 
  });
});