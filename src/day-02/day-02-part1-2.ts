// refactor day-02-part1.ts file
import { Submarine } from "./submarine";
import { navigationParameter } from "../interfaces/navigation-parameter";

export function day02Part0102(inputData: navigationParameter[]) {
  var submarine = new Submarine();
  
  inputData.forEach(element => {
    if (element.direction === "forward") {
      submarine.forward(element.distance);
    } else if (element.direction === "down") {
      submarine.down(element.distance);
    } else if (element.direction === "up") {
      submarine.up(element.distance);
    }
      
  });
  var position = submarine.horizontalPosition * submarine.depthPosition;
  console.log(position);
  return position;
}
