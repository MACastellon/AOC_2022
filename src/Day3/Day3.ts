import Solution from '../Solution';
import { Object } from '../utils/interface';

const ALPHABET_LOWERCASE = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const ALPHABET_UPPERCASE = ALPHABET_LOWERCASE.map(letter => letter.toUpperCase());
const ITEM_VALUES = [...ALPHABET_LOWERCASE, ...ALPHABET_UPPERCASE].reduce((acc: Object, curr, i) => {
    acc[curr] = i + 1;
    return acc;
}, {});

class Day3 extends Solution {

    constructor() {
        super(3);
    }

    private _generateMap(array: Array<string>): Object {
        const map: Object = {};
        for(let i = 0; i < array.length; i++) {
            if(map[array[i]] >= 1) {
                map[array[i]] = map[array[i]] + 1 ;
                continue;
            }
            map[array[i]] = 1;
        }

        return map;
    }

    solvePartOne(): string | number {
        const input = this.getInput().split("\r\n");
        let result = 0;

        for(let i = 0; i < input.length; i++) {
            const half = Math.ceil(input[i].length / 2);
            const firstCompartement = Array.from(new Set(input[i].split('').slice(0, half).join('')));
            const secondCompartement = Array.from(new Set(input[i].split('').slice(half).join('')));

            const compartementItemsMap: Object = this._generateMap([...firstCompartement, ... secondCompartement]);

            for(const [key, value] of Object.entries(compartementItemsMap)) {
               if(value > 1) {
                result = result + ITEM_VALUES[key];
               }
            }
        }

        return result;
    }

    solvePartTwo(): string | number {
        const input = this.getInput().split("\r\n");
        let result = 0;

        for(let i = 0; i < input.length; i += 3) { 
            const firstGroup = Array.from(new Set(input[i].split('').join('')));
            const secondGroup = Array.from(new Set(input[i + 1].split('').join('')));
            const thirdGroup = Array.from(new Set(input[i + 2].split('').join('')));

            const groupMap: Object = this._generateMap([...firstGroup, ...secondGroup, ...thirdGroup]);

            for(const [key, value] of Object.entries(groupMap)) {
                if(value > 2) {
                    result = result + ITEM_VALUES[key];
                }
             }
        }
        
        return result;
    }

}

export default new Day3();