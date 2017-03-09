document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});

function InjetarIziToast(){
  // Injeta framework de notificações "iziToast"
  var scriptIziToast = document.createElement("script");
  scriptIziToast.setAttribute('src', 'https://loyaltycog.mybluemix.net/js/iziToast.min.js');
  // Append
  document.head.appendChild(scriptIziToast);

  var cssIziToast = document.createElement("link");
  cssIziToast.setAttribute("rel", "stylesheet");
  cssIziToast.setAttribute("type", "text/css");
  cssIziToast.setAttribute("href", "https://loyaltycog.mybluemix.net/css/iziToast.min.css");
  cssIziToast.getElementsByTagName("head")[0].appendChild(cssIziToast);
}

InjetarIziToast();
