$(document).ready(function(){
    $(".bars_circle").click(function(){
        $(".nav_collapsed").toggleClass("expand");
        $(".fas.fa-bars").toggleClass("grey_bars");
    });
});
