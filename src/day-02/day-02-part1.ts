var submarine = {
    horizontalPosition: 0,
    depthPosition: 0,

    forward: function (forwardStep: number) {
        this.horizontalPosition = this.horizontalPosition + forwardStep
    },

    down: function (downStep: number) {
        this.depthPosition = this.depthPosition + downStep
    },

    up: function (upStep: number) {
        this.depthPosition = this.depthPosition - upStep
    }
}