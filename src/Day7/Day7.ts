import Solution from '../Solution';
import FileSystem from '../utils/data_structure/FileSystem';

class Day7 extends Solution {

    constructor() {
        super(7);
    }

    solvePartOne(): string | number {
        const lines = this.getInput().split('\r\n');
        const fs = new FileSystem();
        fs.createStructure(lines)
        console.log(fs.calculateTotalSize(fs.currentFolder));
       return 'solvePartOne'
    }

    solvePartTwo(): string | number {
        return 'solvePartTwo'
    }

}

export default new Day7();