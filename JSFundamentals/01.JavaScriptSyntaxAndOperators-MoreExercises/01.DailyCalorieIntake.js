function solve(array, workouts) {
    let gender = array[0];
    let weight = array[1];
    let height = array[2];
    let age = array[3];
    let caloriesIntake = 0;
    let activityFactor = 0;
debugger
    if (gender == "f") {
        caloriesIntake = 655 + 9.7 * weight + 1.85 * height - 4.7 * age;
    }
    else if (gender == "m") {
        caloriesIntake = 66 + 13.8 * weight + 5 * height - 6.8 * age;
    }

    if(workouts==0)activityFactor=1.2;
    else if(workouts==1||workouts==2) activityFactor=1.375;
    else if(workouts>=3&& workouts<=5)activityFactor=1.55;
    else if(workouts==6||workouts==7)activityFactor=1.725;
    else if(workouts>7) activityFactor==1.90;
    caloriesIntake *= activityFactor;
    caloriesIntake = Math.round(caloriesIntake);

    console.log(caloriesIntake);

}
solve(['m', 86, 185, 25], 3)