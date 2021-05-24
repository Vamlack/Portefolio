window.onscroll = function() {sticky()};;

const logo = document.getElementById("rubrique");
const headpage = logo.offsetTop + 10;

function sticky(){
    if (window.pageYOffset > headpage) {
        logo.classList.add("sticky");
    } else {
        logo.classList.remove("sticky");
    }
}
