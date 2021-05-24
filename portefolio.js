window.onscroll = function() {sticky()};;

const logo = document.getElementById("rebrique");
const headpage = logo.offsetTop + 10;

function sticky(){
    if (window.pageYOffset > headpage) {
        logo.classList.add("sticky");
    } else {
        logo.classList.remove("sticky");
    }
}