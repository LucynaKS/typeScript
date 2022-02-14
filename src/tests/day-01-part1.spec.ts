import { day01Part01 } from "../day-01-part1";
const dataTest = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
const answerTest = 7;

describe('Counting the number of increases', () => {
    it('should check whether the number of increases matches the answer', () => {
        expect(day01Part01(dataTest)).toBe(answerTest)
    });
});