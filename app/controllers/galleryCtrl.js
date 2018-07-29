app.controller('galleryCtrl', function ($scope, galleryService, $location) {

  $scope.dogsArr = [];
  $scope.selected;

  $scope.loadGallery = function () {
    galleryService.GetAllDogsAPI().then(function () {
      console.log("Finished GetAllDogsAPI ");
      $scope.dogsArr = dogsArr;
    }, function (error) {

      $log.error(error)
    });

    galleryService.GetAllDogs().then(function (dogsArr) {
      console.log("Finished ??? " + dogsArr);
      $scope.dogsArr = dogsArr;
    }, function (error) {

      $log.error(error)
    });
  }

  $scope.updateImage = function () {
    if (selected.breed == undefined)
      return;

    galleryService.updateRandomImage(selected).then(function () {
      $scope.dogsArr = dogsArr;

    }, function (error) {

      $log.error(error)
    });
    console.log(selected);
  }

  $scope.selectDogBreed = function (dog) {
    selected = dog;
  }

  $scope.loadDogBreed = function (dog) {
    console.log(dog);
    $location.path("/dog/" + dog);
  }
})
