var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    var pages = ["home", "p_vs_np_proof" , "interview", "creations", "interests", "about"];
    $.each(pages,
        function(index, value) {
            var currentTemplateUrl = {templateUrl : "html/" + value + ".html"};
            if (index == 0) {
                $routeProvider.otherwise(currentTemplateUrl);
            } else {
                $routeProvider.when( "/" + value, currentTemplateUrl);
            }

        }
    );
});
