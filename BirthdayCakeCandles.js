// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
var highest = 0;
var count = 0;
    ar.forEach(function(candle) {
      if(candle > highest) {
        highest = candle;
        count = 1;
    } else if (candle === highest) {
        count ++;
    }
    });
     return count;
}