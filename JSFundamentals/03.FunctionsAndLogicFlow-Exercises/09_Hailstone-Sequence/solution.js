function getNext() {
    let number = document.getElementById("num").value;

    let result = document.getElementById("result");

    let sequence = hailStoneSeq(number);

    result.innerHTML = sequence+" ";

    function hailStoneSeq(n) {
        let seq = [n]

        while (n != 1) {
            if (n % 2 == 0) n /= 2
            else n = (n * 3) + 1

            seq.push(n)
        }

        return seq.join(' ')
    }
}