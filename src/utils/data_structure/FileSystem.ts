class File {
    name = ''
    size = 0;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
}

class Folder {
    name = ''
    childrens: Array<Folder> & Array<File> = [];
    parent: Folder | undefined = undefined

    constructor(name: string, parent?: Folder) {
        this.name = name;
        this.parent = parent
    }

    addChildren(children: Folder & File) {
        this.childrens.push(children);
        return this;
    }

    find(name: string): Folder | undefined {
        for(let i = 0; i < this.childrens.length; i++) {
            if(this.childrens[i].name === name) {
                return this.childrens[i];
            }
        }
    }
}


export default class FileSystem {
    root;
    currentFolder;

    constructor() {
        this.root = new Folder('/');
        this.currentFolder = this.root;
    }

    createStructure(lines: Array<string>) {
        for(let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const instructions = line.split(' ');
            const isCommand = instructions[0] === '$';

            if(isCommand) {
                const command = instructions[1];

                if(command === 'cd') {
                    const folder = this.currentFolder.find(instructions[2]) as Folder;
                    this.currentFolder = folder;
                } else if (command === 'ls') {
                    // Loop to get all the following insctructions to create Folder and Files
                }
            }
            
            
        }
    }
}