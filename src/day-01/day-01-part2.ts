export function day01Part02(inputData: number[]) {
  var lastSum = 0;
  var numerator = 0;

  for (var i = 0; i < inputData.length - 2; i++) {
    if (i > 0) {
      var currentSum = inputData[i] + inputData[i + 1] + inputData[i + 2];
      if (currentSum > lastSum) {
        numerator++;
      }
    }
    lastSum = inputData[i] + inputData[i + 1] + inputData[i + 2];
  }
  return numerator
}
