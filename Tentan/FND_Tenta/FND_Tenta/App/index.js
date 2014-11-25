var app = angular.module('TentaApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/View',
        {
            templateUrl: "/App/Partials/ViewGenres.html",
            controller: "ViewGenresController"
        })
    .when('/Add',
        {
            templateUrl: "/App/Partials/AddGenre.html",
            controller: "AddGenreController"
        })
    .when('/Change',
        {
            templateUrl: "/App/Partials/ChangeGenre.html",
            controller: "ChangeGenreController"
        })
    .when('/Remove',
        {
            templateUrl: "/App/Partials/RemoveGenre.html",
            controller: "RemoveGenreController"
        })
    .when('/MASTER',
        {
            templateUrl: "/App/Partials/EXTRAPLUSMASTER.html",
            controller: "EXTRAPLUSMASTERController"
        });
});

app.controller('ViewGenresController', ViewGenresController)
    .controller('AddGenreController', AddGenreController)
    .controller('ChangeGenreController', ChangeGenreController)
    .controller('RemoveGenreController', RemoveGenreController)
    .controller('EXTRAPLUSMASTERController', EXTRAPLUSMASTERController);