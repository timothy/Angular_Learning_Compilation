/**
 * Created by tabradford on 8/5/2015.
 */
app.factory('flickrPhotos', function ($resource) {// found this resource online...
    return $resource('http://api.flickr.com/services/feeds/photos_public.gne', { format: 'json', jsoncallback: 'JSON_CALLBACK' }, { 'load': { 'method': 'JSONP' } });
});