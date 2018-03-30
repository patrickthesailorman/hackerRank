
function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function factorial(n) {
    // Complete this function
}

function main() {
    var n = parseInt(readLine());
    var result = factorial(n);
    process.stdout.write("" + result + "\n");

}