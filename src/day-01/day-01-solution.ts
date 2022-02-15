import { day01Part01 } from "./day-01-part1";
import { day01Part02 } from "./day-01-part2";
import { prepareData } from "../prepare-data";

var inputDataPuzzle = prepareData("src/data/puzzle.txt", "utf-8");

var resultDay01Part01 = day01Part01(inputDataPuzzle);
var resultDay01Part02 = day01Part02(inputDataPuzzle);

console.log("Answer for challange day1 part 1 = " + resultDay01Part01);
console.log("Answer for challange day1 part 2 = " + resultDay01Part02);
