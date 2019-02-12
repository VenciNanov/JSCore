function solve(examPts, homeworkDone, totalHomewokr) {
    let maxExamPts = 400;
    let grade = 0;
    if (examPts === maxExamPts) {
        console.log((6).toFixed(2));
    }
    else if (examPts < 400) {
        debugger;
        let bonusMaxPts = maxExamPts * parseFloat(0.10);
        let bonusPts = (10 / totalHomewokr) * homeworkDone;

        let totalPoints = (90 / 400) * examPts + bonusPts;

        grade = 3 + 2 * (totalPoints - 100 / 5) / (100 / 2);
        if (grade < 3) {
            console.log((2).toFixed(2))
        } else if (grade >= 6) {
            console.log((6).toFixed(2))
        } else if (grade < 6.00 || grade >= 3) {
            console.log(grade.toFixed(2))

        }
    }
}
solve(380, 10, 10)
solve(0, 10, 10)
solve(300, 10, 10)
solve(400, 4, 10)