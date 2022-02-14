import { readFileSync } from "fs";
import { day01Part01 } from "./day-01-part1";
import { day01Part02 } from "./day-01-part2";

var inputDataPuzzle = readFileSync("src/data/puzzle.txt", "utf-8").split("\r\n");

var newInputDataPuzzle = inputDataPuzzle.map(Number);

var resultday01Part01 = day01Part01(newInputDataPuzzle);
var resultday01Part02 = day01Part02(newInputDataPuzzle);

console.log("Answer for challange day1 part 1 = " + resultday01Part01);
console.log("Answer for challange day1 part 2 = " + resultday01Part02);
