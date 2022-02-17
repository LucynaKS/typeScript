import { readFileSync } from "fs";
import { navigationParameter } from "./day-02-part1";

export function prepareData(filePath: string, encoding: BufferEncoding) {
  var navigation = readFileSync(filePath, encoding)
    .split("\r\n")
    .map(function (element: string): navigationParameter {
      var changeNavigation = element.split(" ");
      return {
        direction: changeNavigation[0],
        distance: parseInt(changeNavigation[1]),
      };
    });
  console.log(navigation);
  return navigation
}
