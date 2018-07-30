var app = angular.module("dogApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'homeCtrl'
    })
    .when('/dog', {
      templateUrl: 'views/gallery.html',
      controller: 'galleryCtrl'
    })
    .when('/dog/:breed', {
      templateUrl: 'views/images.html',
      controller: 'imagesCtrl'
    })
    .when('/image/', {
      templateUrl: 'views/oneDogLargeImage.html',
      controller: 'oneDogImageCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
})

