function processData(input) {
    //Enter your code here
    //grab all even and odd[] 
    //return evens
    //
    //return odds
    //merge?
    //let arrayA = array
   let str = input.split('\n');
    
   
    var evens = [];
    var odds = [];
   
    for ( var i = 1; i < str.length; i++) {
        for (var j = 0; j < str[i].length; j++){
                 
        if ( j % 2 === 0) {
            evens.push(str[i][j]);
        } else if ( j % 2 !== 0) {
            odds.push(str[i][j]);
        }
        }
    console.log(evens.join("") + " " + odds.join(""));
    evens =[];
    odds = [];
    }
    
} 