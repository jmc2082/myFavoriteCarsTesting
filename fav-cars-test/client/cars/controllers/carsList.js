angular.module('favcars').controller('FavoriteCarsCtrl', ['$scope', '$meteor',
    function($scope, $meteor) {

        $scope.page = 1;
        $scope.perPage = 3;
        $scope.sort = { name: 1 };
        $scope.orderProperty = '1';

        $scope.title = "My Favorite Cars";

        //$scope.cars = $meteor.collection(Cars).subscribe('cars');
        $scope.cars = $meteor.collection(function() {
            return Cars.find({}, {
                sort : $scope.getReactively('sort')
            });
        });
        // Console the collection
        //console.log($scope.cars);

        $meteor.autorun($scope, function() {
            $meteor.subscribe('cars', {
                limit: parseInt($scope.getReactively('perPage')),
                skip: (parseInt($scope.getReactively('page')) - 1) * parseInt($scope.getReactively('perPage')),
                sort: $scope.getReactively('sort')
            }, $scope.getReactively('search')).then(function() {
                $scope.carsCount = $meteor.object(Counts ,'numberOfCars', false);
            });
        });

        $scope.remove = function(car) {
            $scope.cars.splice( $scope.cars.indexOf(car), 1 );
        };

        $scope.pageChanged = function(newPage) {
            $scope.page = newPage;
        };

        $scope.$watch('orderProperty', function(){
            if ($scope.orderProperty)
                $scope.sort = {name: parseInt($scope.orderProperty)};
        });

    }
]);
