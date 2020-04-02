$(document).ready(function () {

    ///array of food (i'm testing out the buttons for javascript, we totally don't have to do it) 
    var foodtopics = ["Pizza", "Chinese Dishes", "Mexican Dishes", "Italian", "Indian Dishes"];

    //takes array and creates buttons
    function displayButtons() {
        $(".buttons-view").empty();

        for (var i = 0; i < foodtopics.length; i++) {
            var showButton = $("<button>");

            showButton.addClass("btnClass");

            showButton.attr("data-food", foodtopics[i]);

            showButton.text(foodtopics[i]);

            $(".buttons-view").append(showButton);
        }
    }
    $("#button-here").on("click", function (event) {
        //grabs user input from text box
        event.preventDefault();
        var food = $("#food-input").val().trim();
        foodtopics.push(food);
        displayButtons();
    });

    function displayRecipes() {
        var food = $(this).attr("data-food");

        console.log(queryURL);

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function (response) {
                console.log(response);
                $("#recipe-col-1").empty();
                $("#recipe-col-2").empty();
                $("#recipe-col-3").empty();
                var foodResults = response.results;


                //If no information on search is available, alert the user. Need to turn this into a modal
                if (foodResults.length === 0) {
                    alert('Sorry, there are no recipe for this topic');
                    var itemindex = foodTopics.indexOf(food);
                    // otherwise display button
                    if (itemindex > -1) {
                        foodTopics.splice(itemindex, 1);
                        displayButtons();
                    }
                }
                 

                    var foodImage = $("<img>");
                    foodImage.attr("src", foodResults[j].image);
                    foodImage.attr("url", foodResults[j].image);
                    foodImage.addClass("image");
                    foodDiv.append(foodImage);
                    foodDiv.addClass("card", "card-img-top", "card-body");
                    foodDiv.append(q);
                    var foodModal = $("<div>");
                    foodModal.attr(foodResults[j].summary);
                    // foodDiv.append(u);
                    // u.attr("href");

                     });

                    if (j >= 0 && j < 3) {
                        $("#recipe-col-1").append(foodDiv);
                    } else if (j >= 3 && j < 7) {
                        $("#recipe-col-2").append(foodDiv);
                    } else {
                        $("#recipe-col-3").append(foodDiv);
                    }
                }
            })

    }
    displayButtons();

    $(document).on("click", ".btnClass", displayRecipes);
})