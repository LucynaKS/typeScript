import { Submarine } from "./submarine";

export function day02Part01(inputData: navigationParameter[]) {
  var submarine = new Submarine();
  for (var i = 0; i < inputData.length; i++) {
    if (inputData[i].direction === "forward") {
      submarine.forward(inputData[i].distance);
    } else if (inputData[i].direction === "down") {
      submarine.down(inputData[i].distance);
    } else if (inputData[i].direction === "up") {
      submarine.up(inputData[i].distance);
    } else {
      console.log("error");
    }
  }
  var position = submarine.horizontalPosition * submarine.depthPosition;
  console.log(position)
    return position
  
}



const navigationTable: navigationParameter[] = [
  {
    direction: "forward",
    distance: 5,
  },
  {
    direction: "down",
    distance: 5,
  },
  {
    direction: "forward",
    distance: 8,
  },
  {
    direction: "up",
    distance: 3,
  },
  {
    direction: "down",
    distance: 8,
  },
  {
    direction: "forward",
    distance: 2,
  },
];

export interface navigationParameter {
  direction: string;
  distance: number;
}

console.log(day02Part01((navigationTable)))
