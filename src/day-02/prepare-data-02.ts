import { readFileSync } from "fs";
import { navigationParameter } from "../interfaces/navigation-parameter";

export function prepareData(filePath: string, encoding: BufferEncoding): navigationParameter[] {
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
  return navigation;
}
