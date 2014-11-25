function ChangeGenreController($scope, $http, $route) {
    $scope.Genres;
    $http.get("/odata/Genres")
        .success(function (data, status) {
            $scope.Genres = data.value;
        });
    
    $scope.ChangeGenre = function (id, name) {
        $scope.AlterGenre = $scope.Genres[1];
        var result = $.grep($scope.Genres, function (e) { return e.GenreId == id; });
        $scope.AlterGenre.GenreId = result[0].GenreId;
        $scope.AlterGenre.Name = result[0].Name;
        console.log($scope.AlterGenre.GenreId + " " + $scope.AlterGenre.Name);
        $scope.AlterGenre.Name = prompt("What should this genre be called?", name);
        if ($scope.AlterGenre.Name != null) {
            $http.put("odata/Genres('" + id + "')", $scope.AlterGenre).success(function() {
                console.log("Entry #" + id + " was altered.");
                $route.reload();
            });
        }
    };
};