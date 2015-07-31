/**
 * Created by tabradford on 7/27/2015.
 */
app.controller('SlideController', ['$scope','$interval','SlideService', function($scope, $interval, SlideService) {
    var go;

    $scope.isSlide = true;
    $scope.pic = SlideService.getRandString(); //[1,2,3,4,5,6,7,8,9,0];
    $scope.idx = 0;

    $scope.test = $scope.pic.length;

    function next(){
        $scope.idx < $scope.pic.length-1 ? $scope.idx++ : done();
    }

   $scope.stop = function(){
       if(angular.isDefined(go)){
           $interval.cancel(go);
           go = undefined;
       }
    };

    $scope.start = function(){
        if(angular.isDefined(go))return;

      go = $interval(function() {
            next();
        }, 900);
   };

    function done(){
        SlideService.reMix();
        $scope.pic = SlideService.getRandString();
        $scope.isSlide = false;
        $scope.stop();
    }

}]);