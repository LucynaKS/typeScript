import { day01Part0102 } from "../../day-01/day-01-part1-2";

describe('Counting the number of increases', () => {
    it('should check whether the number of increases matches the answer', () => {
        const dataTest = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
        const answerTest = 7;
        expect(day01Part0102(dataTest)).toBe(answerTest)
    });

    it('should check whether the number of increases matches the answer for one element of the table', () => {
        const dataTest = [199];
        const answerTest = 0;
        expect(day01Part0102(dataTest)).toBe(answerTest)
    });

    it('should check whether the number of increases matches the answer for the same elements of the table', () => {
        const dataTest = [199, 199, 199, 199, 199];
        const answerTest = 0;
        expect(day01Part0102(dataTest)).toBe(answerTest)
    });
});
