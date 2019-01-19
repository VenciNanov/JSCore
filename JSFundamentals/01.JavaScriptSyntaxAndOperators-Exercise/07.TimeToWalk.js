function solve(steps, stepsLength, speed) {

    steps = Number(steps);
    stepsLength = Number(stepsLength);
    speed = Number(speed);

    let distanceInMeters = steps * stepsLength;
    let metersPerSecond=(speed*1000)/3600
    let t = distanceInMeters / metersPerSecond;

    let resttime = 0;

    if (distanceInMeters > 500) {
        resttime = Math.floor(distanceInMeters / 500)*60;

    }

    t+=resttime
    
    let hours = Math.floor(t / 3600);
    let minutes = Math.floor((t - hours*3600)/60);
    let seconds = Math.round(t - hours * 3600 - minutes * 60);

    hours = format(hours);
    minutes = format(minutes);
    seconds = format(seconds);

    console.log(`${hours}:${minutes}:${seconds}`)

    function format(a) {
        let x = new String(a);
        if (x.length < 2) {
            return a = "0" + a;
        }
        return a
    }
}

solve(500000, 0.60, 5)
solve(2564, 0.70, 5.5)