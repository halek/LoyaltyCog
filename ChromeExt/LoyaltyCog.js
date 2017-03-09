function getImageUrl(searchTerm, callback, errorCallback) {

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

var div=document.createElement("div");
document.body.appendChild(div);

// Check Partner
var currentURL = window.location.href;
getImageUrl(currentURL, function(isPartner){ // callback
  if (isPartner){
    var scriptJQ = document.createElement("script");
    scriptJQ.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js');
    // Append
    document.head.appendChild(scriptJQ);

    var scriptNoty = document.createElement("script");
    scriptJQ.setAttribute('src', chrome.runtime.getURL('/js/noty/packaged/jquery.noty.packaged.min.js'));
    // Append
    document.head.appendChild(scriptNoty);

  }
},
function(msg) {  //errorCallback
  console.error(msg);
})
