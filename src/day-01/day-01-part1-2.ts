// refactor day-01-part1.ts file

export function day01Part0102(inputData: number[]) {
    var readingSonar = 0;
    var puzzle_sonar = 0;
  
    inputData.forEach(function(item:number,index:number){
        if (index > 0) {
            if (item > readingSonar) {
              puzzle_sonar++;
            }
          }
          readingSonar = item;
      })
    return puzzle_sonar;
  }
  