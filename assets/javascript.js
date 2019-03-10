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

// var config = {
//     apiKey: 'copy this from slack',
//     authDomain: "project1-443df.firebaseapp.com",
//     databaseURL: "https://project1-443df.firebaseio.com",
//     projectId: "project1-443df",
//     storageBucket: "project1-443df.appspot.com",
//     messagingSenderId: "760943696966"
// };

// firebase.initializeApp(config);

// var database = firebase.database();
// //<---Firebase and Server Storage purposes----->
// //reference activity 18-push 02 solved in class activities for firebase usage and variable assigning
// //we may need to store the user input from the textbox of the translate.html and then pull it in the dictionary.html
// //We may want to create several variables that we store in Firebase:
// // 1. We need to store the translated word - English word - for sure - to pull from server and use in the dictionary javascript file
// // ----------Save step 2 and 3 for later---------------
// // 2. The languages being converted if that's required for the api - see below - i.e. variable for English, variable for Italian
// //          (leave this alone for now, and we can come back after)
// // 3. We may want to also store the original non-translated word on the server if we find use for it. 

// - https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it

var $translateButton = $('#translateButton');
var $phrase2translate = $('#phrase2translate');
console.log($translateButton);
$translateButton.on('click', function (event) {
    event.preventDefault();

    var pairTest = 'langpair=en|sp';

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
    });
});


// $.ajax({
//     $phrase2translate = $('#phrase2translate').val().trim();
//     url: queryURL,
//     method: "GET",
//     data: {
//         q: '' + $phrase2translate,
//         langpair: 'this needs to be in the format of "en|it" - as in english|italian and is listed as a mandatory paramater on the docs'
//     }
// }).then(function (response) {
//     var results = response.data;
//     console.log(results);
// });
// <-----Api----->
//mainly need retrieve the input from the textbox, store it in a variable, 
// and then call that variable as the query for the myMemory api. Look carefully at the api for myMemory - 
//   determine which languages we need to use. The api documentation inferred that we need to specify in the call
//     which language we're converting it from to the language we're converting it to in this format: 
//  Example:     English to Italian as per the documentation is en|it. I assume that means it could apply in reverse
