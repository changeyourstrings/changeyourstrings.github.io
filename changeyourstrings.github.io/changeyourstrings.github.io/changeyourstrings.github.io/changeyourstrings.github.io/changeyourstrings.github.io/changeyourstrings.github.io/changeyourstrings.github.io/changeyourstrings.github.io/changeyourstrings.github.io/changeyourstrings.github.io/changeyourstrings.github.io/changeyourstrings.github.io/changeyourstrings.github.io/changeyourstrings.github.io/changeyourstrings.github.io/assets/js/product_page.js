EXPANDED = " expanded"
SHRINKED = " shrink"
INIT = "init_state"
APPEAR = " appear"
VANISH = " vanish"

function expand(element) {

    function toggle_vis(el) {
        if (el.style.display == "none")
            el.style.display = "inline-block";
        else {
            el.style.display = "none";
        }
    }

    function toggle_class(el, from_, to) {
        el.className = el.className.replace(from_, "");
        el.className += to;
    }

    function do_expand(el, all_cols) {


        if (!el.expanded) {
            toggle_class(el, SHRINKED, EXPANDED);
            el.expanded = true;
            enter_mode = VANISH;
            leave_mode = APPEAR;
        } else {
            toggle_class(el, EXPANDED, SHRINKED);
            el.expanded = false;
            enter_mode = APPEAR;
            leave_mode = VANISH;
        }

        // for (var i = 0; i < all_cols.length; i++) {
        //     elem = all_cols[i];
        //     if (elem != el) {
        //         toggle_class(elem, leave_mode, enter_mode);
        //         elem.addEventListener('transitionEnd', function() {
        //             toggle_vis(elem);
        //         }, false);
        //     }
        // }

    }

    el = document.getElementById(element);
    all_cols = document.getElementsByClassName("tcol")

    if (!el.className.match("tcol")) {
        console.error("Element '" + element + "' is not an expandable column.");
        return;
    } else {
        // if in init state:
        if (!'expanded' in el || el.className.match(INIT)) {
            el.className = el.className.replace(INIT, EXPANDED);
            el["expanded"] = false
        } else {
            console.log("hide elem" + all_cols.length);
            do_expand(el, all_cols);
        }
    }
}
