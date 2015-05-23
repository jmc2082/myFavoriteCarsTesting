angular.module("favcars").run(["$rootScope", "$location", function($rootScope, $location) {
    $rootScope.$on("$stateChangeError", function(event, next, previous, error) {
        // We can catch the error thrown when the $requireUser promise is rejected
        // and redirect the user back to the main page
        if (error === "AUTH_REQUIRED") {
            $location.path("/cars");
        }
    });
}]);

angular.module("favcars").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
        function($urlRouterProvider, $stateProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'client/cars/views/home.ng.html'
                })
                .state('cars', {
                    url: '/cars',
                    templateUrl: 'client/cars/views/cars-list.ng.html',
                    controller: 'FavoriteCarsCtrl',
                    resolve: {
                        'currentUser': ['$meteor', function($meteor) {
                            return $meteor.requireUser();
                        }]
                    }
                })
                .state('carDetails', {
                    url: '/cars/:carId',
                    templateUrl: 'client/cars/views/car-details.ng.html',
                    controller: 'CarDetailsCtrl'
                })
                .state('wheelsAll', {
                    url: '/wheels',
                    templateUrl: 'client/wheels/views/wheels-main.ng.html',
                    controller: 'WheelsCntr'
                })
                .state('junkpile', {
                    url: '/junkpile',
                    templateUrl: 'client/cars/views/junk-pile.ng.html'
                })
                .state('contactMe', {
                    url: '/contactme',
                    templateUrl: 'client/cars/views/contact-me.ng.html'
                })
                .state('manageusers', {
                    url: '/manageusers',
                    templateUrl: 'client/users/views/manage-users.ng.html'
                });

            $urlRouterProvider.otherwise("/");
        }
    ]
);
