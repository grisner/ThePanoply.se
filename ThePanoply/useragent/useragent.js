var js = document.createElement('script');
js.type = "text/javascript";

var css = document.createElement('link');
css.type = "text/css";
css.rel = "stylesheet";


if (navigator.userAgent.match(/Android/i) != null || navigator.userAgent.match(/Mobile/i) != null){
    js.src = "mobile.js";
    css.href = "mobile.css";    
}
else {
    js.src = "desktop.js";
    css.href = "desktop.css";
}

var h = document.getElementsByTagName('head')[0];
h.appendChild(js);
h.appendChild(css);