
function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function factorial(n) {
    var output = 1;
  
  while (n > 1) {

    output *= n;
    
    n--;
  }
 
  return output;
}


function main() {
    var n = parseInt(readLine());
    var result = factorial(n);
    process.stdout.write("" + result + "\n");

}