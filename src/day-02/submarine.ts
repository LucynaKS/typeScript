export class Submarine {
  horizontalPosition: number;
  depthPosition: number;

  constructor() {
    this.horizontalPosition = 0;
    this.depthPosition = 0;
  }

  forward(forwardStep: number) {
    this.horizontalPosition = this.horizontalPosition + forwardStep;
  }

  down(downStep: number) {
    this.depthPosition = this.depthPosition + downStep;
  }

  up(upStep: number) {
    this.depthPosition = this.depthPosition - upStep;
  }
}
