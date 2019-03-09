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

    $word2search = $wordInput.val();
    var queryURL = 'https://wordsapiv1.p.mashape.com/words/' + $word2search;
    debugger;


    $.ajax({
        url: queryURL,
        method: 'GET',
        headers: {
            "X-Mashape-Key": 'b88960534emsh3986e79d77e9244p1a45ccjsn600c13ed9dfa',
            'Accept': 'application/json'
        }
    }).then(function (response) {
        var results = response.data;
        console.log(response);
    });


});


