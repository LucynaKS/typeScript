export function day01Part01(inputData: number[]) {
  var readingSonar = 0;
var puzzle_sonar = 0;
for (var i = 0; i < inputData.length; i++) {
  if (i > 0) {
    if ((inputData[i]) > readingSonar) {
      puzzle_sonar++;
    }
  }
  readingSonar = (inputData[i]);
}
// console.log(puzzle_sonar);
return puzzle_sonar;
}
