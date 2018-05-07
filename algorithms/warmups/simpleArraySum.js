function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    sum = arr.reduce((prev,curr)=>prev + curr);
    console.log(sum)
}