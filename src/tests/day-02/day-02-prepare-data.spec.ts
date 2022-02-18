import { prepareData } from "../../day-02/prepare-data-02";
import { navigationParameter } from "../../interfaces/navigation-parameter";

describe('data parsing', () => {
    it('should convert text file to object', () => {
        var result: navigationParameter[] = [
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
        expect(prepareData("src/data/test.txt", "utf-8")).toStrictEqual(result)
    });
});
