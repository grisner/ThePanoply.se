function getMobileCSS() {
        var css = document.createElement('link');
        css.type = "text/css";
        css.rel = "stylesheet";

    if (navigator.userAgent.match(/Mozilla/i) != null && navigator.userAgent.match(/Mobile/i) != null){ // may need changing?
        console.log('mobile');
        css.href = "css/mobile.css";
    }
    else {
        console.log('not mobile');
        css.href = "css/desktop.css";
    }

    var h = document.getElementsByTagName('head')[0];
    h.appendChild(css);
}