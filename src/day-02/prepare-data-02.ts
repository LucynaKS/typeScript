import { readFileSync } from "fs";
import { navigationParameter } from "./day-02-part1";

export function prepareData(filePath: string, encoding: BufferEncoding) {
  // var navigation = readFileSync(filePath, encoding).split("\r\n");
  var navigation = readFileSync(filePath, encoding).split("\r\n").map(navigationParameter);
  console.log(navigation)
}

prepareData("src/data/position.txt", "utf-8")

