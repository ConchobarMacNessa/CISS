function updateDom(Something) {

}

function createEl(element, className, text, url){
  
}

function fetch(method, url, responseCallback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      var data = JSON.parse(request.responseText);
      console.log(data);
      responseCallback(data);
    }
  }
  request.oneerror = function() {
    responseCallback('Sorry, connection error');
  }
  request.open(method, url, true);
  request.send();
}

fetch('GET', 'http://localhost:4000/api', updateDom);
