import { day02Part02 } from "../../day-02/day-02-part2";

describe("", () => {
  it("", () => {
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

    expect(day02Part02(navigation)).toBe(result);
  });
});
