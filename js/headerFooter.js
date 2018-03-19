function myFunction(){

var element = document.getElementById("header_logo_wrapper");
var element2 = document.getElementById("small_logo");

    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        element.classList.add("headerUp");
        element2.classList.add("smallLogoDown");
    } else {
        element.classList.remove("headerUp");
        element2.classList.remove("smallLogoDown");
    }
}

window.onscroll = function(){myFunction()};
