// Injeta framework de notificações "iziToast"
var lcIziToast = null;
var lcIziModal = null;
var lcPrototype = null;
var lcCookie = null;

// CSS iziModal
/*var cssIziModal = document.createElement("link");
cssIziModal.setAttribute("rel", "stylesheet");
cssIziModal.setAttribute("type", "text/css");
cssIziModal.setAttribute("href", "https://loyaltycog.mybluemix.net/css/iziModal.min.css");
document.head.appendChild(cssIziModal);*/

// verifica jquery
/*if(!window.jQuery)
{
   var script = document.createElement('script');
   script.type = "text/javascript";
   script.src = "https://code.jquery.com/jquery-3.1.1.min.js";
   script.integrity = "sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
   script.crossorigin = "anonymous"
   document.getElementsByTagName('head')[0].appendChild(script);
}*/

// Loader dinâmico de scripts
function loadScript( url, callback ) {
  var script = document.createElement( "script" )
  script.type = "text/javascript";
  if(script.readyState) {  //IE
    script.onreadystatechange = function() {
      if ( script.readyState === "loaded" || script.readyState === "complete" ) {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  //Others
    script.onload = function() {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName( "body" )[0].appendChild( script );
}

/*var everythingLoaded = setInterval(function() {
  if (/loaded|complete/.test(document.readyState)) {
    clearInterval(everythingLoaded);
    initLC(); // this is the function that gets called when everything is loaded

    // Load iziModal
    loadScript("https://loyaltycog.mybluemix.net/js/iziModal.min.js", function() {
        lcIziModal = iziModal;
    });
  }
}, 10);*/

function initLC(){
    return;
    var ourCookie = lcCookie.get('loyaltycog');

    if (!ourCookie){
        iziToast.show({
            color: 'dark',
            icon: 'fa-cog',
            title: 'LoayltyCog',
            message: 'Olá!',
            position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
            progressBarColor: 'rgb(0, 255, 184)',
            buttons: [
                ['<button>Sim</button>', function (instance, toast) {
                    alert("Sim!");
                }],
                ['<button>Fechar</button>', function (instance, toast) {
                    instance.hide({
                        transitionOut: 'fadeOutUp',
                        onClose: function(instance, toast, closedBy){
                            console.info('closedBy: ' + closedBy); //btn2
                        }
                    }, toast, 'close', 'btn2');
                }]
            ],
            onOpen: function(instance, toast){
                console.info('callback abriu!');
            },
            onClose: function(instance, toast, closedBy){
                console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
            }
        });
    }
}

function Setup() {

  // CSS iziToast
  var cssIziToast = document.createElement("link");
  cssIziToast.setAttribute("rel", "stylesheet");
  cssIziToast.setAttribute("type", "text/css");
  cssIziToast.setAttribute("href", "https://loyaltycog.mybluemix.net/css/iziToast.min.css");
  document.head.appendChild(cssIziToast);

  // CSS iziToastFont
  var cssIziToastFont = document.createElement("link");
  cssIziToastFont.setAttribute("rel", "stylesheet");
  cssIziToastFont.setAttribute("type", "text/css");
  cssIziToastFont.setAttribute("href", "https://loyaltycog.mybluemix.net/css/font-awesome.min.css");
  document.head.appendChild(cssIziToastFont);

  var lcFrame = document.createElement("iframe");
  lcFrame.setAttribute("id","loyaltycod")
  lcFrame.setAttribute("height","0")
  lcFrame.setAttribute("width","0")
  lcFrame.setAttribute("src","https://loyaltycog.mybluemix.net/activity")
  lcFrame.setAttribute("style","display: none; visibility: hidden;")
  document.body.appendChild(lcFrame);

  // Load iziToast
  loadScript("https://loyaltycog.mybluemix.net/js/iziToast.min.js", function() {
      lcIziToast = iziToast;

  });

  // Load Prototype Ajax
  loadScript("https://loyaltycog.mybluemix.net/js/prototype.js", function() {
      lcPrototype = Ajax;
  });

  // Load js-cookies
  loadScript("https://loyaltycog.mybluemix.net/js/lc.js.cookie.js", function() {
      lcCookie = Cookies.noConflict();
  });

}

Setup();
