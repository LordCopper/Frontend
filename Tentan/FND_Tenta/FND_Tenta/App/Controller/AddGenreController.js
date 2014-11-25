function AddGenreController($scope, $http, $location) {
    $scope.AddGenre = function () {
        console.log($scope.NewGenre);
            $http({
                url: "odata/Genres",
                method: 'POST',
                data: $scope.NewGenre
            }).success(function() {
                console.log($scope.NewGenre.Name + " was saved.");
                $location.path("/View");
            });
    };
};