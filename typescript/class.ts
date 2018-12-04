class Car {

    private _model: string;

    get model(): string {
        return this._model;
    }
}

class ReferenceItem {

    constructor(
        public year: number,
        public title: string
    ) {

    }

    public printItem() {
        return;
    }
}

class Encyclopedia extends ReferenceItem {
    public edition: string;
    public numberInSet: number;

    constructor(title: string, year: number) {
        super(year, title);
    }
}

class Journal extends ReferenceItem {
    public contributors: string[];
    public issueNumber: number;
}

let mypedia = new Encyclopedia("title", 2001);