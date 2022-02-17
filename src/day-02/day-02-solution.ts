import { day02Part01 } from "./day-02-part1";
import { day02Part02 } from "./day-02-part2";
import { prepareData } from "./prepare-data-02";

var inputDataNavigation = prepareData("src/data/position.txt", "utf-8");

var resultDay01Part01 = day02Part01(inputDataNavigation);
var resultDay01Part02 = day02Part02(inputDataNavigation);

console.log("Answer for challenge day1 part 1 = " + resultDay01Part01);
console.log("Answer for challenge day1 part 1 = " + resultDay01Part02);
