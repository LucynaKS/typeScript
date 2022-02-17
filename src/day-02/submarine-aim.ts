export class SubmarineAim {
  horizontalPosition: number;
  depthPosition: number;
  aim: number;
  depthFinal: number;

  constructor() {
    this.horizontalPosition = 0;
    this.depthPosition = 0;
    this.aim = 0;
    this.depthFinal = 0;
  }

  forward(forwardStep: number) {
    this.horizontalPosition = this.horizontalPosition + forwardStep;
    this.depthPosition = this.aim * forwardStep + this.depthPosition;
  }

  down(increaseAim: number) {
    this.aim = this.aim + increaseAim;
  }

  up(decreaseAim: number) {
    this.aim = this.aim - decreaseAim;
  }
}
