function gcd(a, b) {
    if (a == 0)
        return b;
        debugger

    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }

    return a;
}
console.log(gcd(15, 5))