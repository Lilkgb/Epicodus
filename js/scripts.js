$(document).ready(function() {
  $("button#darkTheme").click(function() {
    $("body").removeClass();
    $("body").addClass("dark")
    $("#darkTheme").hide();
    $("#lightTheme").show();
  });
  $("button#lightTheme").click(function() {
    $("body").removeClass();
    $("body").addClass("light");
    $("#lightTheme").hide();
    $("#darkTheme").show();
  });
  $(".box").click(function() {
    $(this).find(".dropDown").slideToggle("slow");
  });
});
