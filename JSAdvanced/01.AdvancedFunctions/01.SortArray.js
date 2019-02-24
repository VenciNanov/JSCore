function sortArray(array, method) {
    var ascendingComparator = function (a, b) {
        return a - b;
    }

    var descendingComparator = function (a, b) {
        return b - a;
    }

    var sortingStrats = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };
    return array.sort(sortingStrats[method]);
}
