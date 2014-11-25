function ViewGenresController($scope, $http, $route) {
    $http.get("/odata/Genres")
        .success(function (data, status) {
            $scope.Genres = data.value;
        });
}