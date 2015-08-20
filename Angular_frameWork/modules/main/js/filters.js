/**
 * Created by tabradford on 8/10/2015.
 */

/*
 * this is where all custom filter go.
 */

//this filter should capitalize the first letter of a word
app.filter('frstLttrCp', function() {
    return function(input) {
        if (input!=null)
            input = input.toLowerCase();
        return input.substring(0,1).toUpperCase()+input.substring(1);
    }
});