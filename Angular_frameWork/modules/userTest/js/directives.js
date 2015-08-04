/**
 * Created by tabradford on 7/29/2015.
 * this might look messy because I took a bunch of inline notes when I was going though the plural sight training.
 */
app.directive('tbUser', function(){
    return {
        templateUrl: "modules/userTest/templates/userTemp.html",
        restrict: "E", //"A" = attribute, "E" = element, "C" = class, "M" = comments you can use more then one at the same time...
        // replace: true// this will replace the custom div tag for compatibility. the only thing is you need to wrap you html file in a div if you do this.
        scope: {//this will create a user attribute that can be used in your directives tag. i.e. <tb-slide-for-me user=" whatever data you want to pass from your controller in here..."
            //example: '&' // this will pass in a function named example
            user: '=',// '=' tells angular that I want to pass a value to be used by my directive
            initialCollapsed: '@collapsed'// '@' tells angular that i am passing in a data value. Angular will only let you pass in strings using the '@'
        },// specifying a word after the '@' i.e. '@collapsed' will let you use a different var in html then in you angular directive. html will show as collapsed and angular will show as initialCollapsed
        //scope: true,// true == inherited scope. this means that the scope for the directive will inherit
        // all properties from the controller but the controller will not be able to see the directives scope. // false is the default and will make the scope shared between both controller and directive
        controller: function($scope){// keep all controllers for your directive inside of your directive in order to maintain encapsulation
            $scope.collapsed = ($scope.initialCollapsed === 'true');
            $scope.knightMe = function(user){
                user.rank = "knight";
            };
            $scope.collapse = function(){
                $scope.collapsed = !$scope.collapsed;
            };
        }
    }
});

app.directive('tbAddress', function(){
    return{
        restrict: 'E',
        scope: true,
        templateUrl: 'modules/userTest/templates/addressTemp.html',
        controller: function($scope){
            $scope.collapsed = false;

            $scope.collapseAddress = function(){
                $scope.collapsed = true;
            };
            $scope.expandAddress = function(){
                $scope.collapsed = false;
            };
        }
    }
});