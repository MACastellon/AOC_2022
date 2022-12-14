import Solution from '../Solution';
import { Object } from '../utils/interface';

const SHAPES: Object = {
    ROCK: 'ROCK',
    PAPER: 'PAPER',
    SCISSORS: 'SCISSORS'
};

const SHAPES_POINT_VALUE = {
    [SHAPES.ROCK]: 1,
    [SHAPES.PAPER]: 2,
    [SHAPES.SCISSORS]: 3,
};

const ENCRYPTED_STRATEGY_GUIDE: Object  = {
    A: SHAPES.ROCK,
    B: SHAPES.PAPER,
    C: SHAPES.SCISSORS,
    X: SHAPES.ROCK,
    Y: SHAPES.PAPER,
    Z: SHAPES.SCISSORS
};

class Day2 extends Solution {

    constructor() {
        super(2);
    }
    
    solvePartOne(): string | number {
        let score = 0;

        const input = this.getInput().split("\r\n");

        for(let i = 0; i < input.length; i++) {
            const matchPick = input[i].split(' ');
            const opponentPick = ENCRYPTED_STRATEGY_GUIDE[matchPick[0]];
            const myPick = ENCRYPTED_STRATEGY_GUIDE[matchPick[1]];

            if(opponentPick === myPick) {
                score += SHAPES_POINT_VALUE[myPick] +  3;
                continue;
            }

            if (
                opponentPick === SHAPES.SCISSORS && myPick ===  SHAPES.ROCK 
                || opponentPick === SHAPES.ROCK && myPick ===  SHAPES.PAPER 
                || opponentPick === SHAPES.PAPER && myPick ===  SHAPES.SCISSORS 
                ) {
                score += SHAPES_POINT_VALUE[myPick] + 6;
                continue;
            }

           score += SHAPES_POINT_VALUE[myPick];
        }

       return score
    }

    solvePartTwo(): string | number {
        let score = 0;

        const input = this.getInput().split("\r\n");

        for(let i = 0; i < input.length; i++) {
            const matchPick = input[i].split(' ');
            const opponentPick = ENCRYPTED_STRATEGY_GUIDE[matchPick[0]];
            const myAction = matchPick[1];

            if(myAction === 'Y') {
                score += SHAPES_POINT_VALUE[opponentPick] +  3;
                continue;
            }

            if (myAction === 'Z') {
                let newPick = 0;
                
                if (opponentPick === SHAPES.ROCK) {
                    newPick = SHAPES_POINT_VALUE[SHAPES.PAPER];
                }

                if (opponentPick === SHAPES.PAPER) {
                    newPick = SHAPES_POINT_VALUE[SHAPES.SCISSORS];
                }

                if (opponentPick === SHAPES.SCISSORS) {
                    newPick = SHAPES_POINT_VALUE[SHAPES.ROCK];
                }

                score += newPick + 6;
                continue;
            }

            if(myAction === 'X') {
                let newPick = 0;

                if (opponentPick === SHAPES.PAPER) {
                    newPick = SHAPES_POINT_VALUE[SHAPES.ROCK];
                }

                if (opponentPick === SHAPES.SCISSORS) {
                    newPick = SHAPES_POINT_VALUE[SHAPES.PAPER];
                }

                if (opponentPick === SHAPES.ROCK) {
                    newPick = SHAPES_POINT_VALUE[SHAPES.SCISSORS];
                }

                score += newPick;
                continue
            }

        }

       return score
    }

}

export default new Day2();