/**
 * Created by tabradford on 7/27/2015.
 */

app.factory('SlideService', function(){

    //unique number generator
    var mixedList = [];//sequential numbers between 1 and 10 that will be shuffled
    var randList = [];// will be random numbers between 0 and 9
    var temp = 0;//holds one var at a time.
    var stringNum = [];

    /**
     * This will clear out all values from all variables
     */
    function clear(){
        mixedList = [];
        randList = [];
        temp = 0;
        stringNum = [];
    }

    /**
     * converts the mixedList to an array of string numbers
     */
    function toString(){
        for(var j =0; j < 10; j++){
            if(mixedList[j] < 10){
                stringNum.push("0"+mixedList[j]);
            }else{
                stringNum.push(""+mixedList[j]);
            }
        }
    }

    /**
     * populates my mixedList -- this will empty all values and reload with a new list of random unique values
     */
    function reMix() {
        //need to make sure everything is empty before population...
        clear();

        // loads both of my arrays
        for (var i = 0; i < 10; i++) {
            mixedList.push(i + 1);
            randList.push(Math.floor((Math.random() * 10)));
        }

        //shuffle mixedList using the randList
        for (var m = 0; m < 10; m++) {
            temp = mixedList[m];
            mixedList[m] = mixedList[randList[m]];
            mixedList[randList[m]] = temp;
        }
        toString();
    } reMix();


    function getRand(){
        return mixedList;
    }

    function getRandString(){
        return stringNum;
    }

    /**
     * returns a list of all the functions I want to pass from my service
     */
    return {
        getRand: getRand,
        getRandString: getRandString,
        reMix: reMix
    }

});