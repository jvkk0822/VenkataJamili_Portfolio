console.log("script connected");

$(document).ready(function() {

    $('#AdventureBuddy').on("click", function(event) {
        event.preventDefault();
        window.open('https://espeders90.github.io/AdventureBuddy/');
    });
    $('#Airbnbit').on("click", function(event) {
        event.preventDefault();
        window.open('https://infinite-coast-96588.herokuapp.com/');
    });
    $('#SmartScout').on("click", function(event) {
        event.preventDefault();
        window.open('https://pacific-anchorage-31155.herokuapp.com/');
    });
    $('#FriendFinder').on("click", function(event) {
        event.preventDefault();
        window.open('https://safe-lowlands-48224.herokuapp.com/');
    });
    $('#NewsScrape').on("click", function(event) {
        event.preventDefault();
        window.open('https: //shielded-shelf-64405.herokuapp.com/');
    });

});
