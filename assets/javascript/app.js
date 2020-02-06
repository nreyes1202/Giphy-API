$(document).ready(function () {

  var topics = ['parks and rec', 'the good place', 'doctor who', 'the office', 'the walking dead', 'golden girls', 'schitts creek',
    'breaking bad', 'saturday night live', 'unbreakable kimmy schmidt',
  ];

  function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < topics.length; i++) {

      // making a new button
      // <button></button>
      var newGif = $("<button>").text(topics[i]);
       // <button>topics[i]</button>
      //giving the new button an attribute of new data
       // <button data-name="topics[i]">topics[i]</button>
      newGif.attr("data-name", topics[i]);
       // <button class='gif' data-name="topics[i]">topics[i]</button>

      newGif.addClass("gif");
      // Placing it on the page
      $("#buttons-view").append(`<button class='gif' data-name="${topics[i]}">${topics[i]}</button>`);
    }
  }
  renderButtons();
  function gifImages() {
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=rseYwBLyvT0dvfCZ8DCjwzWA85NNlIDP";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response)
    });
  }

  gifImages();

  // $("#add-show").on("click", function (event) {
  //   // event.preventDefault() prevents the form from trying to submit itself.
  //   // We're using a form so that the user can hit enter instead of clicking the button if they want
  //   event.preventDefault();

  //   // This line will grab the text from the input box
  //   var movie = $("#movie-input").val().trim();
  //   // The movie from the textbox is then added to our array
  //   movies.push(movie);

  //   // calling renderButtons which handles the processing of our movie array
  //   renderButtons();
  // });







});
