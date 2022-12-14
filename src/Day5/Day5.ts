/**
    [V]         [T]         [J]        
    [Q]         [M] [P]     [Q]     [J]
    [W] [B]     [N] [Q]     [C]     [T]
    [M] [C]     [F] [N]     [G] [W] [G]
    [B] [W] [J] [H] [L]     [R] [B] [C]
    [N] [R] [R] [W] [W] [W] [D] [N] [F]
    [Z] [Z] [Q] [S] [F] [P] [B] [Q] [L]
    [C] [H] [F] [Z] [G] [L] [V] [Z] [H]
    1   2   3   4   5   6   7   8   9 
 */

import Solution from '../Solution';
import Stack from '../utils/data_structure/Stack';

class Day5 extends Solution {

    constructor() {
        super(5);
    }

    private generateStacks(): Array<Stack> {
        return [
            new Stack().push('C', 'Z', 'N', 'B', 'M', 'W', 'Q', 'V'),
            new Stack().push('H', 'Z', 'R', 'W', 'C', 'B'),
            new Stack().push('F', 'Q', 'R', 'J'),
            new Stack().push('Z', 'S', 'W', 'H', 'F', 'N', 'M', 'T'),
            new Stack().push('G', 'F', 'W', 'L', 'N', 'Q', 'P'),
            new Stack().push('L', 'P', 'W'),
            new Stack().push('V', 'B', 'D', 'R', 'G', 'C', 'Q', 'J'),
            new Stack().push('Z', 'Q', 'N', 'B', 'W'),
            new Stack().push('H', 'L', 'F', 'C', 'G', 'T', 'J')
        ]
    }

    generateInstruction(input: string): Array<number> {
        const parsedInstruction = input.replace('move ', '').replace('from ', '').replace('to ', '').split(' ')
        const amount = Number(parsedInstruction[0]);
        const from = Number(parsedInstruction[1]);
        const to = Number(parsedInstruction[2]);

        return [amount, from , to];
    };

    solvePartOne(): string | number {
        const stacks = this.generateStacks();
        const input = this.getInput().split("\r\n");

        for(let i = 0; i < input.length; i++) {
            const [amount, from , to] = this.generateInstruction(input[i])

            for(let i = 0; i < amount; i++) {
                const crate = stacks[from - 1].pop();
                stacks[to - 1].push(crate);
            }
        }

        return stacks.map(stack => stack.peak()).join('');
    }

    solvePartTwo(): string | number {
        const stacks = this.generateStacks();
        const input = this.getInput().split("\r\n");

        for(let i = 0; i < input.length; i++) {
            const [amount, from , to] = this.generateInstruction(input[i])

            let crateToMove = new Stack()
            for(let i = 0; i < amount; i++) {
                const crate = stacks[from - 1].pop();
                crateToMove.push(crate);
            }

            for(let i = 0; i < amount; i++) {
                const crate = crateToMove.pop();
                stacks[to - 1].push(crate);
            }
        }

        return stacks.map(stack => stack.peak()).join('');
    }

}

export default new Day5();