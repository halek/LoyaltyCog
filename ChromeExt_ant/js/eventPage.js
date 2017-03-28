

/**
 * Operações de inicialização da extensão quando de sua instalação no browser
 * @param  {string} userEmail e-mail da conta do usuário logado no browser
 */
function init(userEmail){
  var data = {
    'currentView':'views/login.html',
    'userEmail':userEmail
  };
  Storage.set('lcdata',data);
}

/**
 * Listener para operações no momento da instalação da extensão no browser
 */
chrome.runtime.onInstalled.addListener(function () {

  console.log("LoyaltyCog instalado.");

  // Verifica se existem informações do usuário
  chrome.identity.getProfileUserInfo(function(userInfo) {
    if (!userInfo.id) {
      console.log("Nenhum usuário logado - carregando login");
      init(null);
    }
    else {
      // temos um usuário logado no chrome
      // verificamos se existe login
      chrome.storage.sync.get('lcentity', function(info) {
         if (!info.exp_date || info.exp_date < new Date().getTime()){
           // entidade expirada - prosseguimos com login e obtenção dos dados
           //chrome.browserAction.setPopup({ "null":"views/login.html"});
           //chrome.browserAction.setPopup({popup: "views/login.html"});
           //loadPage("views/loin.html");
           init(userInfo.email);
         }
         else {
           init(null);
         }
       });
    }
  });
});


chrome.browserAction.onClicked.addListener(function (tab){

  // Obtemos o id da aba atual do browser
  var tab;
  chrome.tabs.getCurrent(function (tab) {});

  // configuramos a página
  chrome.browserAction.setPopup({
    tabId: tab.id,
    popup: 'popup.html'
  });
  setPageContent('views/login.html');
});
