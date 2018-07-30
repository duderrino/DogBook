app.factory('galleryService', function ($http, $q, $routeParams, $filter) {

    dogsArr = [];
    var selectedImg;

    function Dog(breed, imageUrl) {
        this.breed = breed;
        this.imageUrl = "http://thursdaytherapy.net/wp-content/uploads/2015/11/dog-placeholder.jpg";
    }

    function GetAllDogs() {
        var asyncAction = $q.defer();
        asyncAction.resolve(dogsArr);
        return asyncAction.promise;
    }

    function GetAllDogsAPI() {
        var asyncAction = $q.defer();
        dogsArr.splice(0, dogsArr.length);
        $http.get("https://dog.ceo/api/breeds/list/all").then(function (response) {
            console.log(response);

            for (var dogName in response.data.message) {
                console.log(dogName);
                AddDogToArr(dogName);
            }

        },
            function Error() {

                $log.Error;

            });
        return asyncAction.promise;
    }

    function GetDogBreedImgs() {
        dogsArr.splice(0, dogsArr.length);
        $http.get("https://dog.ceo/api/breed/" + $routeParams.breed + "/images").then(function (response) {
            console.log(response);

            for (var i = 0; i < response.data.message.length; ++i) {
                dogsArr.push(new Dog(""));
                dogsArr[i].imageUrl =  response.data.message[i];
            }
        },
            function Error() {
                $log.Error;
            });
    }

    function updateRandomImage(dog) {
        var oneDogUrl = "https://dog.ceo/api/breed/" + dog.breed + "/images/random";
        $http.get(oneDogUrl).then(function (response) {
            var imageUrl = response.data.message;

            var result = $filter('filter')(dogsArr, { 'breed': dog.breed }, true)[0];

            console.log(result); // { name: 'cherries', quantity: 5 }
            result.imageUrl = imageUrl;
        },
            function (error) {

                console.log(dogName);

            })
    }

    function AddDogToArr(dogName) {
        var dog = new Dog(dogName);
        dogsArr.push(dog);
        updateGogImage(dog);
    }

    function updateGogImage(dog){
        var oneDogUrl = "https://dog.ceo/api/breed/" + dog.breed + "/images/random";
        $http.get(oneDogUrl).then(function (response) {
            dog.imageUrl = response.data.message;
        },
            function (error) {
                console.log(dog.breed);
            })

    }

    function getSelectedDogImage() {
        return selectedImg;
    }

    function setSelectedDogImage(img) {
        selectedImg = img;
    }

    return {
        GetAllDogs: GetAllDogs,
        GetAllDogsAPI: GetAllDogsAPI,
        AddDogToArr: AddDogToArr,
        GetDogBreedImgs: GetDogBreedImgs,
        updateRandomImage: updateRandomImage,
        getSelectedDogImage: getSelectedDogImage,
        setSelectedDogImage: setSelectedDogImage
    }
});
