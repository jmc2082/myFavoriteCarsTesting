angular.module('favcars').controller('WheelsCntr', ['$scope', '$meteor',
    function($scope, $meteor) {

        $scope.title = "Wheels For Cars";

        $scope.wheels = $meteor.collection(function() {
            return Wheels.find({}, {
                sort : $scope.getReactively('sort')
            });
        });
        // Console the collection
        //console.log($scope.wheels);



        //$scope.users = $meteor.collection(function() {
        //    return users.find({});
        //});
        //console.log($scope.users);

        $scope.users = function() {
            //var user = Meteor.users.findOne({_id:this.userId});
            //var user = Meteor.users.find();
            //var user = Meteor.users.emails.find();
            // Find by email
            var user = Meteor.users.find({ 'emails.address' : 'mellow@yellow.com' });
            console.log(user);
            //console.log('buggin out');
        };
        $scope.users();
        //console.log($scope.users);

    }
]);
