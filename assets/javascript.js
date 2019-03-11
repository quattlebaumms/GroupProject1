var $translatorButton = $('#translator-button'); //assigning buttons from homepage to variables
var $dictionaryButton = $('#dictionary-button');

$translatorButton.on('click', function () {
    window.location = './translate.html';
});
// calling button-clicks to load corresponding pages
$dictionaryButton.on('click', function () {
    window.location = './dictionary.html';
});
////////////////////////////////////////////////////////////////////////////


// - https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it

var $translateButton = $('#translateButton');
var $phrase2translate = $('#phrase2translate');
console.log($translateButton);
$translateButton.on('click', function (event) {
    event.preventDefault();

    var convertFrom = $('#convertFrom').val().trim();
    var convertTo = $('#convertTo').val().trim();



    var pairTest = 'langpair=' + convertFrom + '|' + convertTo;

    $translate = $phrase2translate.val().trim();
    var queryURL = 'https://api.mymemory.translated.net/get?' + pairTest;

    $.ajax({
        url: queryURL,
        method: 'GET',
        data: {
            q: $translate
        }
    }).then(function (response) {
        console.log(response);
        var translatedText = response.responseData.translatedText;

        var $resultsDiv = $('#resultsField');

        $resultsDiv.text(translatedText);
    });
});

