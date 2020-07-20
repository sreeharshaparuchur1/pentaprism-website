
(function ($) {
    var image = new Image();
    image.src = "./res/images/animation.gif";
})(jQuery);

function init() {
    $("#camera-gif-figure").animate({
        top: "30%",
        opacity: "1",
    });

    setTimeout(() => {
        $("#camera-gif").attr('src', "./res/images/animation.gif");
    }, 500);
    
    setTimeout(() => {
        document.getElementById("camera-gif-figure").style.opacity = '0';
        document.getElementById("main-wrapper").style.opacity = '1';
        document.getElementsByTagName("body")[0].style.backgroundColor = "whitesmoke";
    }, 2500);
}