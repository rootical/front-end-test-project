(function($) {
    $(".hamburger").click(function() {
        $("#main-menu").slideToggle("slow", function() {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function() {
        $("#main-menu").slideToggle("slow", function() {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });


}(jQuery));
