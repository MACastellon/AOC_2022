import Solution from '../Solution';
import FileSystem from '../utils/data_structure/FileSystem';

class Day7 extends Solution {

    constructor() {
        super(7);
    }

    solvePartOne(): string | number {
        const lines = [
            '$ cd /'
        ];
        const fs = new FileSystem();
        fs.createStructure(lines)
       return 'solvePartOne'
    }

    solvePartTwo(): string | number {
        return 'solvePartTwo'
    }

}

export default new Day7();