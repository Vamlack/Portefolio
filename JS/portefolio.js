window.onscroll = function() {sticky()};;

var logo = document.getElementById("rubrique");
var headpage = logo.offsetTop;

function sticky(){
    if (window.pageYOffset > headpage) {
        logo.classList.add("sticky");
    } else {
        logo.classList.remove("sticky");
    }
}
