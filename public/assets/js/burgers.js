(function() {
    $(".devour-button").on("click", function(event) {
    event.preventDefault();
      var id = $(this).data("id");
      // var newBurger = $(this).data("newburger");
  
      var newBurgerState = {
        devoured: true
      };
      console.log('console.log newBurgerState is: ', newBurgerState);

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("console.log changed devoured to: ", newBurgerState.devoured);
          location.reload();
        }
      )
    })
  
    $(".submit-button").on("click", function(event) {
      event.preventDefault();
  
      var newBurgers = {
        burger_name: $("#nb").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurgers
      }).then(
        function() {
          console.log("console.log created new burger.");
          location.reload();
        }
      )
    })
  })();
  