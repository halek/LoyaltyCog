// Executar chamadas ajax
function callRestGet(verobo, url, callback, errorCallback) {

  var searchUrl = 'https://loyaltycog.mybluemix.net/teste' +
  '?url=' + encodeURIComponent(searchTerm);
  var x = new XMLHttpRequest();
  x.open('GET', searchUrl);
  // The API responds with JSON, so let Chrome parse it.
  x.responseType = 'json';
  x.onload = function() {
    // Parse and process the response
    var response = x.response;
    if (!response) {
      errorCallback('Sem resposta de LoyaltyCog!');
      return;
    }
    var firstResult = response.isPartner;
    callback(firstResult);
  };
  x.onerror = function() {
    errorCallback('Network error.');
  };
  x.send();
}
