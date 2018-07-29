app.controller("oneDogImageCtrl", function ($scope, $window, galleryService) {
    $scope.dogImage = galleryService.getSelectedDogImage();
    console.log($scope.dogImage);

    $scope.back = function () {
        $window.history.back();
    }
});