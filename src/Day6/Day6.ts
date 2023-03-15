import Solution from '../Solution';

const MARKER_LENGTH_PART_1 = 4;
const MARKER_LENGTH_PART_2 = 14;

class Day6 extends Solution {

    constructor() {
        super(6);
    }

    private _findSignal(input: Array<string>, markerLength: number) {
        for(let i = markerLength; i < input.length; i++) {
            const charactersSet = new Set();
         
            for(let j = i- markerLength; j < i; j++) {
                const currentCharacter = input[j];
                charactersSet.add(currentCharacter)
            }

            if(charactersSet.size === markerLength) {
                return i;
            }
            
        }

        return NaN;
    }

    solvePartOne(): string | number {
        const input = this.getInput().split('');
        return this._findSignal(input, MARKER_LENGTH_PART_1);
    }

    solvePartTwo(): string | number {
        const input = this.getInput().split('');
        return this._findSignal(input, MARKER_LENGTH_PART_2);
    }

}

export default new Day6();