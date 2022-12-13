import Solution from '../Solution';

class Day1 extends Solution {

    constructor() {
        super(1);
    }

    private _getFormatedElfCalories():Array<number> {
        const input = this.getInput().split("\r\n");

        const elfCaloriesArray = [0];
        for(let i = 0; i < input.length; i++) {
            if(input[i] === '') {
                elfCaloriesArray.push(0);
                continue;
            }

            const caloriesCount = parseInt(input[i]);
            const currentElfCaloriesCount = elfCaloriesArray[elfCaloriesArray.length - 1];

            elfCaloriesArray[elfCaloriesArray.length - 1] = currentElfCaloriesCount + caloriesCount;
        }

        return elfCaloriesArray;
    }

    solvePartOne(): string | number {
        const elfCaloriesArray: Array<number> = this._getFormatedElfCalories();

        const sortedElfCalories = elfCaloriesArray.sort((a, b) => a - b);
    
        return sortedElfCalories[sortedElfCalories.length - 1];
    }

    solvePartTwo(): string | number {
        const elfCaloriesArray = this._getFormatedElfCalories();

        const sortedElfCalories = elfCaloriesArray.sort((a, b) => a - b);
    
        return sortedElfCalories[sortedElfCalories.length - 1] + sortedElfCalories[sortedElfCalories.length - 2] + sortedElfCalories[sortedElfCalories.length - 3];
    }

}

export default new Day1();