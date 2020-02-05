$(document).ready(function () {

  var topics = ['parks and rec', 'the good place', 'doctor who', 'the office', 'the walking dead', 'golden girls', 'schitts creek',
    'breaking bad', 'westworld', 'saturday night live', 'unbreakable kimmy schmidt',
  ],

  function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < topics.length; i++) {
      
      var newGif = $("<button>").text(topics[i]);
      newGif = attr("data-name", topics[i]);
      newGif.addClass("gif");
      $("#buttons-view").append(topics);
    }



  }
  var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=rseYwBLyvT0dvfCZ8DCjwzWA85NNlIDP";



  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
  });




}