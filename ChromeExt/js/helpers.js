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

/**
 * Configura o conteúdo a ser exibido no popup a partir das views
 * @param {string} url caminho da view. Ex. views/login.html
 */
function setPageContent(url) {
  $( "#mainContainer" ).load( url );
};
