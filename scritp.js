var translateButtonEl = document.getElementById('translate');
var inputTextEl = document.getElementById('inputArea');
var outputAreaEl = document.getElementById('outputArea');

translateButtonEl.addEventListener('click', translate);

var url = 'https://api.funtranslations.com/translate/yoda.json';

function translate(event) {
  var input = inputTextEl.value;
  var finalURL = constructURL(input);
  fetch(finalURL)
    .then((response) => response.json())
    .then((json) => {
      outputAreaEl.innerText = json.contents.translated;
    })
    .catch(() => alert('some error occured'));
}

function constructURL(inputText) {
  var encodedURI = encodeURI(inputText);
  return `${url}?text=${encodedURI}`;
}
