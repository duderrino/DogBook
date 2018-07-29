app.controller('imagesCtrl', function ($scope, $location, galleryService, $routeParams) {

  $scope.dogsArr = [];
  $scope.dogBreed = $routeParams.breed;

  galleryService.GetDogBreedImgs();
  galleryService.GetAllDogs().then(function (dogsArr) {
    console.log("Finished ??? " + dogsArr);
    $scope.dogsArr = dogsArr;

  }, function (error) {

    $log.error(error)
  });

  $scope.selectDogBreed = function (dog) {
    selected = dog;
    galleryService.setSelectedDogImage(selected.imageUrl);
    $location.path("/image/");
  }
})