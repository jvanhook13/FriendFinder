
$("#name").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // Get the ID by finding an element with a "name" attribute equal to the string "id"
        var id = $("[name=id]").val().trim();

        var userName = {
            answer: $("#answer [name=useranswer]").val().trim()
        };

    })

    function userscorefunc () { $("#answer").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Get the ID by finding an element with a "name" attribute equal to the string "id"
    var id = $("[name=id]").val().trim();

    var userAnswer = {
        answer: $("#answer [name=useranswer]").val().trim()
    };

    // Send the PUT request.
    $.ajax("/apiRoutes/survey/" + id, {
        type: "PUT",
        data: useranswer
    }).then(
        function () {

            var userAnswers = [];
            userAnswer.push(userAnswers)
            console.log("userAnswers", userAnswers)
            var userScore = userAnswers.reduce((a, b) => {
                return a + b
            }, 0);
            return userScore
            

        }

       


    );

    


})};