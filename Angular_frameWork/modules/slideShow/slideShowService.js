/**
 * Created by tabradford on 7/27/2015.
 */
app.service('SlideService', function(){

    //unique number generator
    var mixedList= [];//sequential numbers between 1 and 10 that will be shuffled
    var randList = [];// will be random numbers between 0 and 9
    var temp = 0;//holds one var at a time.
    var stringNum = {};

    loadList();//initializes the list for first use

    /**
     * populates my mixedList
     */
    function loadList(){
        // loads both of my arrays
        for(var i = 0; i < 10; i++){
            mixedList.push(i + 1);
            randList.push(Math.floor((Math.random() * 10)));
        }

        //shuffle mixedList using the randList
        for(var m = 0; m < 10; i++){
            temp = mixedList[m];
            mixedList[m] = mixedList[randList[m]];
            mixedList[randList[m]] = temp;
        }
    }

    /**
     *
     * @returns {Array} this will return the random numbers array with repopulating it.
     */
    function getRand(){
        return mixedList;
    }

    /**
     * converts the mixedList to an array of string numbers
     */
    function toString(){
        for(var i =0; i < 10; i++){
            if(mixedList[i] < 10){
                stringNum.push("0"+mixedList[i]);
            }else{
                stringNum.push(""+mixedList[i]);
            }
        }
    }

    /**
     * this will empty all values and reload with a new list of random unique values
     */
    function mixer() {
        // empty all vars in order to get a new set every time
        mixedList= [];
        randList = [];
        temp = 0;
        //populates my mixedList
        loadList();
    }

    /**
     * returns a list of all the functions I want to pass from my service
     */
    return {
        toString: toString,
        mixer: mixer,
        getList: getRand
    }

});