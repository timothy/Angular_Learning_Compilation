/**
 * Created by tabradford on 7/27/2015.
 *
 * I originally wanted to make this into a game and so I randomized the sequence of the slides.
 * I relized that most everything I needed to do would not be things I was trying to learn but things I already knew
 * so I did put in a randomizer for my slides but I did not finish the game. I might do later on my own time...
 */
app.controller('SlideController', ['$scope','$interval','SlideService', function($scope, $interval, SlideService) {
    var go;

    $scope.isSlide = true;
    $scope.pic = SlideService.getRandString(); //[1,2,3,4,5,6,7,8,9,0];
    $scope.idx = 0;

    $scope.test = $scope.pic.length;
// will go through each slide until it is done
    function next(){
        $scope.idx < $scope.pic.length-1 ? $scope.idx++ : done();
    }
// this will stop the interval function
   $scope.stop = function(){
       if(angular.isDefined(go)){
           $interval.cancel(go);
           go = undefined;
       }
    };
//this will start the slide show
    $scope.start = function(){
        if(angular.isDefined(go))return;

      go = $interval(function() {
            next();
        }, 900);
   };
//this will randomize the slides and then display all of them
    function done(){
        SlideService.reMix();
        $scope.pic = SlideService.getRandString();
        $scope.isSlide = false;
        $scope.stop();
    }

}]);