/**
 * Created by tabradford on 8/4/2015.
 */
app.controller('GithubController', ['$scope','$http', function($scope, $http) {

    $scope.goShow = false;

    $scope.getUserInfo = function(user){
            // this if else statement is a simple attempt to screen bad input. This is in no way exhaustive
        if(user === undefined || user == ""){
            $scope.error = {type: "empty string received", isTrue: true};
            $scope.user = undefined;
            $scope.goShow = false;
        }// end if
        else{
            var onUserComplete = function(response) {
                $scope.user = response.data;
                $scope.error = {type: "", isTrue: false};
                $scope.goShow = true;
            };

            var onError = function(reason) {
                $scope.error = {type: reason, isTrue: true};
            };
            //this will get info a users info from GitHub. if successful it will call onUserComplete else onError
            $http.get("https://api.github.com/users/" + user)
                .then(onUserComplete, onError);

        }// end else
    };// end getUserInfo
}]);// end GithubController