$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("changed devour state to ", newDevour);

                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {

        event.preventDefault();

        var newBurger = {
            name: $("#nb").val().trim(),
            devoured: false,
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created a new burger!!");

                location.reload();
            }
        );
    });
});