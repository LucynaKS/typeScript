import { navigationParameter } from "../interfaces/navigation-parameter";
import { SubmarineAim } from "./submarine-aim";

export function day02Part02(inputData: navigationParameter[]) {
  var submarineAim = new SubmarineAim();
  for (var i = 0; i < inputData.length; i++) {
    if (inputData[i].direction === "forward") {
      submarineAim.forward(inputData[i].distance);
    } else if (inputData[i].direction === "down") {
      submarineAim.down(inputData[i].distance);
    } else if (inputData[i].direction === "up") {
      submarineAim.up(inputData[i].distance);
    }
  }
  var position = submarineAim.horizontalPosition * submarineAim.depthPosition;
  console.log(position);
  return position;
}
