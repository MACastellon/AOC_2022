export default class Stack {
    items = new Array();

    push(data: string | number, ...args: Array<string | number>): Stack {
        this.items.push(data, ...args)
        return this;
    }

    pop() {
        return this.items.pop();
    }

    peak() {
        return this.items[this.items.length -1];
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.items.length;
    }
}