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
    parent: Folder | undefined = undefined;
    size = 0;

    constructor(name: string, parent?: Folder) {
        this.name = name;
        this.parent = parent
    }

}

export default class FileSystem {
    root;
    currentFolder;

    constructor() {
        this.root = new Folder('/');
        this.currentFolder = this.root;
    }

    public calculateTotalSize(folder: Folder): number {
        let total = 0;
        
        if(folder.size > 100000) {
            total += folder.size;
        }

        if(folder.childrens.length === 0) {
            return total;
        }

        return this.calculateTotalSize(folder);
    }

    public createStructure(lines: Array<string>) {
        for(let i = 1; i < lines.length; i++) {
            const line = lines[i];
            const instructions = line.split(' ');
            
            this.executeInstructions(instructions);
        }

        this.currentFolder = this.root;

        return this.currentFolder;
    }

    private executeInstructions(instructions: Array<string>) {
        const isCommand = instructions[0] === '$';

        if(isCommand) {
            const command = instructions[1];

            if(command === 'cd') {
                const goBack = instructions[2] === '..';
                const folder = goBack ? this.currentFolder.parent : this.findInCurrentFolder(instructions[2]);
                this.currentFolder = folder as Folder;
            }
        
        } else {
            if(instructions[0] === 'dir') {
                const name = instructions[1];
                this.createFolder(name);
            } else {
                const name = instructions[1];
                const size = Number(instructions[0]);
                this.createFile(name, size)
            }
        }
    }

    private findInCurrentFolder(name: string): Folder | File | undefined {
        for(let i = 0; i < this.currentFolder.childrens.length; i++) {
            if(this.currentFolder.childrens[i].name === name) {
                return this.currentFolder.childrens[i];
            }
        }
    }

    private createFolder(name: string) {
        this.currentFolder.childrens.push(new Folder(name, this.currentFolder));
    }

    private createFile(name: string, size: number) {
        this.currentFolder.childrens.push(new File(name, size));
        this.currentFolder.size += size;
    }
}