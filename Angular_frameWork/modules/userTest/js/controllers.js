/**
 * Created by tabradford on 7/29/2015.
 */
app.controller('UserController', ['$scope','$routeParams', function($scope) {
    $scope.test = "Slide show made by tim!";
    $scope.user1 = {
        name: 'Luke Skywalker',
        address:{
            street: 'Hidden Forest',
            city: 'Secret Rebel Base',
            planet: 'Yavin 4'
        },
        friends: [
            'Han',
            'Leia',
            'Chewbacca'
        ]
    };

    $scope.user2 = {
        name: 'Han Solo',
        address:{
            street: 'Dessert',
            city: 'Mos Eisley',
            planet: 'Tattoine'
        },
        friends: [
            'Luke',
            'Leia',
            'Chewbacca'
        ]
    };

}]);