$(document).ready(function() {
  $("button#darkTheme").click(function() {
    $("body").removeClass();
    $("body").addClass("dark")
    $("#darkTheme").hide();
    $("#lightTheme").show();
    $("#lightLogo").hide();
    $("#darkLogo").show();
    $("#lightSearch").hide();
    $("#darkSearch").show();
  });
  $("button#lightTheme").click(function() {
    $("body").removeClass();
    $("body").addClass("light");
    $("#lightTheme").hide();
    $("#darkTheme").show();
    $("#lightLogo").show();
    $("#darkLogo").hide();
    $("#lightSearch").show();
    $("#darkSearch").hide();
  });
  $(".box").click(function() {
    $(this).find(".dropDown").slideToggle("slow");
  });
});
