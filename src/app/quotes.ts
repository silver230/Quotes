export class Quotes {
    public showDescription: boolean;
    constructor( public name: string, public quote: string, public completeDate:Date) {
        this.showDescription = false;
    }
}
