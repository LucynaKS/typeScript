import { day01Part02 } from "../day-01-part2";
const dataTest = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
const answerTest = 5;

describe('Counting the sum of increases', () => {
    it('should check whether the number of sums of increases corresponds to the answer', () => {
        expect(day01Part02(dataTest)).toBe(answerTest)
    });
});