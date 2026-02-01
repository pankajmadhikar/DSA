// Count Operations to Obtain Zero

var countOperations = function(num1, num2) {
    let result;
    if(num1>=num2){
        result =  Math.floor(num1 / num2);
    }else if(num2>=num1){
        result = Math.floor(num2 / num1)
    }

    console.log("result= ",result)
};

countOperations(2,3)