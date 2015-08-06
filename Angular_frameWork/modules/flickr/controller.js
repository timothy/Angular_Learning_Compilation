/**
 * Created by tabradford on 8/5/2015.
 */
app.controller('FlickrController', function ($scope, flickrPhotos) {
    $scope.getPhoto = function(subject){
        $scope.photos = flickrPhotos.load({ tags: subject });
    };
});