$(document).ready(function () {
    $("#button1").mouseenter(function () {
        $("#button1").removeClass("makeRed").addClass("makeBorder");
    });

    $(".bottom_button").mouseleave(function () {
        $("#button1").addClass("makeRed").removeClass("makeBorder");

    });
});