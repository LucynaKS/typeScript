import { readFileSync } from "fs";

const file = readFileSync("src/puzzle.txt", "utf-8").split("\r\n");

var readingSonar = 0;
var puzzle_sonar = 0;
for (var i = 0; i < file.length; i++) {
  if (i > 0) {
    if (parseInt(file[i]) > readingSonar) {
      puzzle_sonar++;
    }
  }
  readingSonar = parseInt(file[i]);
}
console.log(puzzle_sonar);
