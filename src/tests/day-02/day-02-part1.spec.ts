import { day02Part01 } from "../../day-02/day-02-part1";

describe('Multiply final horizontal position by final depth', () => {

    it('should check whether multiplying the final horizontal position by the final depth gives us the predicted result', () => {
        const navigation = [
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
        ]
        const result = 150;
        expect(day02Part01(navigation)).toBe(result);
            });
    
});