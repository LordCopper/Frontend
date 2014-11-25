function EXTRAPLUSMASTERController($scope, $http, $route) {
    $http.get("/odata/Genres")
        .success(function (data, status) {
            $scope.Genres = data.value;
        });
    $scope.MASTERALTER = function (id, name) {
        $scope.Master = $scope.Genres[1];
        var result = $.grep($scope.Genres, function (e) { return e.GenreId == id; });
        $scope.Master.GenreId = result[0].GenreId;
        $scope.Master.Name = result[0].Name;
        $scope.Master.Name = prompt("What should this genre be called?", name);
        if ($scope.Master.Name != "" && $scope.Master.Name != null) {
            $http.put("odata/Genres('" + id + "')", $scope.Master).success(function() {
                console.log("Entry #" + id + " was EXTRA PLUS!");
                $route.reload();
            });
        } else if ($scope.Master.Name != null) {
            $http.delete("odata/Genres('" + id + "')").success(function () {
                alert("I'm so cold.....");
                alert("Is that a light.");
                alert("AAAAAA it's the garbage collection!!");
                console.log("Entry #" + id + " was EXTERMINATED!!.");
                $route.reload();
            });
        }
    };
    $scope.MASTERADDING = function () {
            $http({
                url: "odata/Genres",
                method: 'POST',
                data: $scope.NewMaster
            }).success(function() {
                console.log($scope.NewMaster.Name + " was HAMMERD IN THERE!");
                $route.reload();
            });
    };
};