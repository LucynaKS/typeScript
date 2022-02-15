export class Submarine {
  horizontalPosition: number;
  depthPosition: number;

  constructor() {
    this.horizontalPosition = 0;
    this.depthPosition = 0;
  }

  forward(forwardStep: number) {
    return (this.horizontalPosition = this.horizontalPosition + forwardStep);
  }

  down(downStep: number) {
    return (this.depthPosition = this.depthPosition + downStep);
  }

  up(upStep: number) {
    return (this.depthPosition = this.depthPosition - upStep);
  }
}
