import Solution from '../Solution';

class Day4 extends Solution {

    constructor() {
        super(4);
    }

    private _getAssignedSections(range: string): Array<number> {
        const sections = [];
        const from = parseInt(range.split('-')[0]);
        const to = parseInt(range.split('-')[1]);

        for(let i = from; i <= to; i++) {
            sections.push(i)
        }
        
        return sections;
    };

    private _isFullyIncluded(sectionOne: Array<number>, sectionTwo: Array<number>): boolean {
        let isFullyIncluded = false;
        for(let i = 0; i < sectionOne.length; i++) {
            if(sectionTwo.includes(sectionOne[i])) {
                isFullyIncluded = true;
                continue;
            }
            isFullyIncluded = false;
            break;
        }
        return isFullyIncluded;
    }

    private _isOverlaping(sectionOne: Array<number>, sectionTwo: Array<number>): boolean {
        let isOverlaping = false;

        for(let i = 0; i < sectionOne.length; i++) {
            if(sectionTwo.includes(sectionOne[i])) {
                isOverlaping = true;
                break;
            }
        }

        return isOverlaping
    }

    solvePartOne(): string | number {
        const input = this.getInput().split("\r\n");
        let overlapingCount = 0;

        for(let i = 0; i < input.length; i++) {
            const elfOneRange = input[i].split(',')[0];
            const elfTwoRange = input[i].split(',')[1];

            if(elfOneRange === elfTwoRange) {
                overlapingCount++;
                continue;
            }
            
            const elfOneSections = this._getAssignedSections(elfOneRange);
            const elfTwoSections = this._getAssignedSections(elfTwoRange);
            
            if(this._isFullyIncluded(elfOneSections, elfTwoSections)) {
                overlapingCount++;
            }

            if(this._isFullyIncluded(elfTwoSections, elfOneSections)) {
                overlapingCount++;
            }

        }

        return overlapingCount;
    }

    solvePartTwo(): string | number {
        const input = this.getInput().split("\r\n");
        let overlapingCount = 0;

        for(let i = 0; i < input.length; i++) {
            const elfOneRange = input[i].split(',')[0];
            const elfTwoRange = input[i].split(',')[1];

            if(elfOneRange === elfTwoRange) {
                overlapingCount++;
                continue;
            }
            
            const elfOneSections = this._getAssignedSections(elfOneRange);
            const elfTwoSections = this._getAssignedSections(elfTwoRange);
            
            if(this._isOverlaping(elfOneSections, elfTwoSections)) {
                overlapingCount++;
            }

        }

        return overlapingCount;
    }

}

export default new Day4();