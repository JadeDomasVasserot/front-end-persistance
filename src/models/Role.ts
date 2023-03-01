export default class Role {
    private id: number;
    private label: string;


    constructor(id: number, label: string) {
        this.id = id;
        this.label = label;
    }

    getId(): number {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }
    getLabel(): string {
        return this.label;
    }

    setLabel(value: string) {
        this.label = value;
    }
}
