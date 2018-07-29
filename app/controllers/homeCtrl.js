app.controller('homeCtrl', function ($scope, $location) {
    $scope.loadBreedsGallery = function () {
        $location.path("/dog/");
    }
})
