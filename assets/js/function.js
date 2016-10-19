window.onscroll = function() {
    make_static("navbar")
}

FIXED_NAV = " fixed_nav"

function make_static(el) {

    elem = document.getElementById(el);
    head_pic = document.getElementById("head_pic")

    if (document.body.scrollTop > head_pic.offsetHeight) {
        if (elem.className.search(FIXED_NAV) == -1) {
            elem.className += FIXED_NAV;
        }
    }
    else{
        elem.className = elem.className.replace(FIXED_NAV, "");
    }
}
