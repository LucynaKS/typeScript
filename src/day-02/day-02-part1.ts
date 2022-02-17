import { Submarine } from "./submarine";
import { navigationParameter } from "../interfaces/navigation-parameter";

export function day02Part01(inputData: navigationParameter[]) {
  var submarine = new Submarine();
  for (var i = 0; i < inputData.length; i++) {
    if (inputData[i].direction === "forward") {
      submarine.forward(inputData[i].distance);
    } else if (inputData[i].direction === "down") {
      submarine.down(inputData[i].distance);
    } else if (inputData[i].direction === "up") {
      submarine.up(inputData[i].distance);
    }
  }
  var position = submarine.horizontalPosition * submarine.depthPosition;
  console.log(position);
  return position;
}
