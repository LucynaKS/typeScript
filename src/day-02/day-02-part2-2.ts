// refactor day-02-part2.ts file
import { navigationParameter } from "../interfaces/navigation-parameter";
import { SubmarineAim } from "./submarine-aim";

export function day02Part0202(inputData: navigationParameter[]) {
  var submarineAim = new SubmarineAim();
  inputData.forEach((element) => {
    if (element.direction === "forward") {
      submarineAim.forward(element.distance);
    } else if (element.direction === "down") {
      submarineAim.down(element.distance);
    } else if (element.direction === "up") {
      submarineAim.up(element.distance);
    }
  });

  var position = submarineAim.horizontalPosition * submarineAim.depthPosition;
  console.log(position);
  return position;
}
