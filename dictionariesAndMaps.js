function processData(input) {
    var phoneBook = {
        name : String,
        number : Number
    }
   input.split(" ");
    var entries = input[0];
    for (var i = 1; i < entries; i++) { 
        if (input[i] % 2 === 0) {
        phoneBook.number.push(input[i]);
        } else if (input[i] %2 !== 0) {
            phoneBook.name.push(input[i]);
            
        }
    }
    console.log(phoneBook);
} 