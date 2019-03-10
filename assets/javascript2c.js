// var config = {
//     apiKey: "AIzaSyC6esOI7MQQZKAI4G0jllI2WQUiqVeT-5M",
//     authDomain: "project1-443df.firebaseapp.com",
//     databaseURL: "https://project1-443df.firebaseio.com",
//     projectId: "project1-443df",
//     storageBucket: "project1-443df.appspot.com",
//     messagingSenderId: "760943696966"
// };

// firebase.initializeApp(config);

// var database = firebase.database();


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


