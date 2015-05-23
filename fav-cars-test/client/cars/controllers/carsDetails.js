angular.module("favcars").controller("CarDetailsCtrl", ['$scope', '$stateParams', '$meteor',
    function($scope, $stateParams, $meteor) {

        $scope.updateMessage = false;

        $scope.carId = $stateParams.carId;

        $scope.car = $meteor.object(Cars, $stateParams.carId);

        var subscriptionHandle;
        $meteor.subscribe('cars').then(function(handle) {
            subscriptionHandle = handle;
        });

        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

        $scope.$on('$destroy', function() {
            subscriptionHandle.stop();
        });

        //$scope.save = function() {
        //    $scope.car.save().then(function(numberOfDocs) {
        //        console.log('save success doc affected ', numberOfDocs);
        //        $scope.updateMessage = true;
        //    }, function(error) {
        //        console.log('save error', error);
        //    });
        //};
        //
        //$scope.reset = function() {
        //    $scope.car.reset();
        //};

    }
]);