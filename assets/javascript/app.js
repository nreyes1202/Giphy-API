$(document).ready(function () {


  var topics = ['parks and rec', 'the good place', 'doctor who', 'the office', 'the walking dead', 'golden girls', 'schitts creek',
    'breaking bad', 'westworld', 'saturday night live', 'unbreakable kimmy schmidt',
  ],






  var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=rseYwBLyvT0dvfCZ8DCjwzWA85NNlIDP";



  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

  });







})