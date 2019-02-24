function solve() {
    let resultObj = {
        "name": arguments[0],
        "personalInfo": {
            "age": arguments[1],
            "weight": arguments[2],
            "height": arguments[3]
        },
        "BMI": 0,
        "status": ""
    };

    let height = resultObj["personalInfo"]["height"] / 100;
    debugger;
    resultObj['BMI'] = Math.round((parseFloat(resultObj["personalInfo"]["weight"]) / parseFloat(Math.pow(height, 2))));
    let BMI = resultObj['BMI'];

    if(BMI<18.5){
        resultObj["status"] = "underweight";
    }else if(BMI<25&&BMI>=18.5){
        resultObj["status"] = "normal";
    }else if(BMI>=25&&BMI <30){
        resultObj["status"] = "overweight";
    }else{
        resultObj["status"] = "obese";
    }
    
    if(resultObj["status"] == "obese"){
        resultObj.recommendation = "admission required";
    }
return resultObj;
}

solve("Peter", 29, 75, 182)