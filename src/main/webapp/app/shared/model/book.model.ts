export interface IBook {
    id?: number;
    writerName?: string;
    writerId?: number;
}

export class Book implements IBook {
    constructor(public id?: number, public writerName?: string, public writerId?: number) {}
}
