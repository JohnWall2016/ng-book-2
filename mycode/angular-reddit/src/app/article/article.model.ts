export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes: number = 0) {
        this.title = title;
        this.link = link;
        this.votes = votes;
    }

    voteUp() {
        this.votes += 1;
    }

    voteDown() {
        this.votes -= 1;
    }

    domain(): string {
        try {
            const domain: string = this.link.split('//')[1];
            return domain.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}