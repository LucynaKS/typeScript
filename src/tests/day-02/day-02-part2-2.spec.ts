import { day02Part0202 } from "../../day-02/day-02-part2-2";

describe("Horizontal position, depth position and aim", () => {
  it("should whether multiplying the final horizontal position by the final depth gives us the predicted result", () => {
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
    ];
    const result = 900;

    expect(day02Part0202(navigation)).toBe(result);
  });
});
