import fs from 'fs';

export default abstract class Solution {

    constructor(dayNumber: number) {
        console.log(`------- Day ${dayNumber} -------`);
    }

    public getInput(): string {
        return fs.readFileSync('input.txt').toString();
    }

    private partOne(): void {
        const result = this.solvePartOne();
        console.log(`Part 1 : ${result}`);
    }

    abstract solvePartOne(): string | number

    private partTwo(): void {
        const result = this.solvePartTwo();
        console.log(`Part 2 : ${result}`); 
    }

    abstract solvePartTwo(): string | number

    public solve(): void {
        this.partOne();
        this.partTwo();
    }

}