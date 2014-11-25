function RemoveGenreController($scope, $http, $route) {
    $http.get("/odata/Genres")
    .success(function (data, status) {
        $scope.Genres = data.value;
    });
    $scope.RemoveGenre = function (id) {
        $http.delete("odata/Genres('" + id + "')").success(function () {
            console.log("Entry #" + id + " was removed.");
            $route.reload();
        });
    };
};