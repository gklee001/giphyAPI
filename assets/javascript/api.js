
//need to get the document ready for jquery, set up test variables, forloop, create var for adding new div buttons, put text up, add class for each button and append
$(document).ready(function () {

    var topics = ["cats", "dogs", "fans", "potato"];
    //beginning of for loop to make btn
    for (var i = 0; i < topics.length; i++) {
        var addBtn = $("<button>");
        addBtn.attr('value', topics[i])
        addBtn.text(topics[i]);
        addBtn.attr("class", "btn btn-primary")
        $(".topics").append(addBtn)
    }
    //ending of for loop of btn
    // btn clicks



    $("button").on("click", function () {
        var topic = $(this).val();
        console.log(topic);
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q=" +
                topic + "&api_key=6NWMAPYd9aiCkLYrXFqH3rupgpTl1wCk&limit=5",
            method: "GET"
        })
            //we use response.data to move through the objects to grab the actual value
            .then(function (response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    console.log(results[i]);
                    var gif = $("<img>");
                    gif.attr('class', "click")
                    gif.attr("src", results[i].images.original_still.url);
                    gif.attr("data-alt", results[i].images.downsized.url);

                    $('.gifs').prepend(gif);


                }
                console.log(response)
            })
    });
    //https://stackoverflow.com/questions/26098866/jquery-img-clickfunction-selector-not-working
    $("body").on("click", "img", function () {
        console.log("this")
        var holder = $(this).attr("src");
        $(this).attr("src", $(this).attr("data-alt"));
        $(this).attr("data-alt", holder)
    });
});
//need to create an onclick button to grab 10 static non-animated gif images from the giphy api and place them on the page-on click event

//when the users 