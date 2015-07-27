/**
 * Created by tabradford on 7/27/2015.
 */
app.factory('Calc', function(){
    var swtc = 0;
    var num = 0;
    var Total = 0;

    var calcNumber = "";

    function setNum(newNum) { num = newNum; }
    function setSwtc(newSwtc) { swtc = newSwtc; }

    function getTotal() { return Total; }
    function getCalcNumber() { return calcNumber; }

    function numberPress(theNumber) {
        num *= 10;
        num += theNumber;
        calcNumber += theNumber.toString();
        return calcNumber;
    }

    function operationPress(theOperation, new_swtc) {
        if(Total == 0){
            Total = num;
        }
        else{
            switch (swtc) {
                case 1:
                    Total *= num;// multiply
                    break;
                case 2:
                    Total /= num;// divide
                    break;
                case 3:
                    Total -= num;// minues
                    break;
                case 4:
                    Total += num;// plus
                    break;

                default:
                    break;
            }
        }
        calcNumber += theOperation;
        if(theOperation == "="){
            calcNumber += Total.toString();
        }
        swtc = new_swtc;
        num = 0;
        return Total;
    }

    function clearPress() {
        swtc = 0;
        num = 0;
        Total = 0;
        calcNumber = "";
        //$scope.result = 0;
        //$scope.calcNumber = "";
    }

    return {
        clearPress: clearPress,
        operationPress: operationPress,
        numberPress: numberPress,
        getTotal: getTotal,
        setSwtc: setSwtc,
        setNum: setNum,
        getCalcNumber: getCalcNumber
    }

});