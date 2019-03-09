var config = {
    apiKey: "AIzaSyC6esOI7MQQZKAI4G0jllI2WQUiqVeT-5M",
    authDomain: "project1-443df.firebaseapp.com",
    databaseURL: "https://project1-443df.firebaseio.com",
    projectId: "project1-443df",
    storageBucket: "project1-443df.appspot.com",
    messagingSenderId: "760943696966"
};

firebase.initializeApp(config);

var database = firebase.database();

var queryURL = ''


$.ajax({
    url: queryURL,
    method: "GET",
    data: {
        q: '' + $word2Translate,
        apikey: ''
    }
}).then(function (response) {
    var results = response.data;
});