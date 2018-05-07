function solve(a0, a1, a2, b0, b1, b2) {
    var compare = [0,0];
    if (a0 > b0) {
        compare[0]++;
    } else if (a0 < b0) {
        compare[1]++;
    }
    if (a1 > b1) {
        compare[0]++;
    } else if (a1 < b1) {
        compare[1]++;
    }
    if (a2 > b2) {
        compare[0]++;
    } else if (a2 < b2) {
        compare[1]++;
    }
    return compare;
}