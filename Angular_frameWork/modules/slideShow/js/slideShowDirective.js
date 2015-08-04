/**
 * Created by tabradford on 7/31/2015.
 */
// this is a simple directive. I am still learning the basics so I threw this in as a learning tool for me.
app.directive('tbSlide', function(){
    return{
        restrict: 'E',
        $scope: false,
        templateUrl: 'modules/slideShow/templates/slideTemp.html',
        controller: function($scope){
           // $scope.test = "this is coming from the directive and works...";
        }
    }
});