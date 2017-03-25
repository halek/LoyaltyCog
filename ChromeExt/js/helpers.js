/**
 * Helper para armazenar e atualizar dados no repositório local do browser
 * @return {Object} get: objeto armazenado / set: null / update:
 */
var Storage = (function(){

    var setData = function(key,obj){
        var values = JSON.stringify(obj);
        localStorage.setItem(key,values);
    }

    var getData = function(key){
        if(localStorage.getItem(key) != null){
        return JSON.parse(localStorage.getItem(key));
        }else{
            return false;
        }
    }

    var updateDate = function(key,newData){
        if(localStorage.getItem(key) != null){
            var oldData = JSON.parse(localStorage.getItem(key));
            for(keyObj in newData){
                oldData[keyObj] = newData[keyObj];
            }
            var values = JSON.stringify(oldData);
            localStorage.setItem(key,values);
        }else{
            return false;
        }
    }

    return {set:setData,get:getData,update:updateDate}
})();

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
  document.getElementsByTagName( "head" )[0].appendChild( script );
}

/**
 * Configura o conteúdo a ser exibido no popup a partir das views
 * @param {string} url caminho da view. Ex. views/login.html
 */
function setPageContent(url) {

  // Carregamos o html da view
  $.get(url)
    .done(function() {
      $( "#mainContainer" ).load( url );
    }).fail(function() {
      console.error('view não existe!');
    })

    // verificamos se existe um .js
    var urlJs = url.replace("html","js");
    $.get(url)
      .done(function() {
        loadScript(urlJs, function() { });
      }).fail(function() {
        console.log('view:' + urlJs + ' não possui script associado!');
      })

  //$( "#mainContainer" ).load( url );
};
