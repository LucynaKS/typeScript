import { readFileSync } from "fs";

const t = readFileSync("src/puzzle.txt", "utf-8").split("\r\n");

var lastSum = 0;
var numerator = 0;

for (var i = 0; i < t.length - 2; i++) {

    if (i > 0) {
        var currentSum = parseInt(t[i]) + parseInt(t[i + 1]) + parseInt(t[i + 2])
        if (currentSum > lastSum) {
            numerator++
        }
    }
    lastSum = parseInt(t[i]) + parseInt(t[i + 1]) + parseInt(t[i + 2])
}

console.log(numerator)
