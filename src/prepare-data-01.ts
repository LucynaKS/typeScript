import { readFileSync } from "fs";
import { day01Part01 } from "./day-01-part1";
import { day01Part02 } from "./day-01-part2";

export function prepareData(newInputDataPuzzle: number[]) {
  var inputDataPuzzle = readFileSync("src/data/puzzle.txt", "utf-8").split(
    "\r\n"
  );

  var newInputDataPuzzle = inputDataPuzzle.map(Number);

  var resultDay01Part01 = day01Part01(newInputDataPuzzle);
  var resultDay01Part02 = day01Part02(newInputDataPuzzle);

  const results = [resultDay01Part01, resultDay01Part02]

  return results;
}
