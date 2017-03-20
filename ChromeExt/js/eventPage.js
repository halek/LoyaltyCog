chrome.runtime.onInstalled.addListener(function () {

  console.log("LoyaltyCog instalado.");

  // Verifica se existem informações do usuário
  chrome.identity.getProfileUserInfo(function(userInfo) {
    if (!userInfo.id) {
      console.log("Nenhum usuário logado - carregando login");
      //$( "#container" ).load( "/resources/load.html #projects li" );
      chrome.browserAction.setPopup({ "null":"/views/login.html"});
    }
    else {
      console.log(userInfo.email);
    }
  });

});
