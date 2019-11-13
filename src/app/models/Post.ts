export class Post {
    title: string;
    content: string;
    loveIts: number;
    createdAt: Date;

    constructor(init?: Partial<Post>) {
        Object.assign(this, init);
        this.createdAt = new Date();
    }
}