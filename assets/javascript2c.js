var $wordInput = $('#wordInput');
var $dictionarySubmit = $('#dictionarySubmit');


$dictionarySubmit.on('click', function (event) {

    event.preventDefault();

    var $word2search = $wordInput.val().trim();
    var queryURL = 'https://wordsapiv1.p.mashape.com/words/' + $word2search;
    var $searchResults = $('.search-results');


    $.ajax({
        url: queryURL,
        method: 'GET',
        headers: {
            "X-Mashape-Key": '',
            'Accept': 'application/json'
        }
    }).then(function (response) {
        var word = response.word;
        var definition = response.results.definition;
        console.log(response);
        console.log(word);
        console.log(definition);








    });
});


