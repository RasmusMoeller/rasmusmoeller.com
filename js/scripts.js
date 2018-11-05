$(document).ready(function(){
    $(".fas.fa-bars").click(function(){
        $(".nav_collapsed").toggleClass("expand");
        $(this).toggleClass("grey_bars");
    });
});
