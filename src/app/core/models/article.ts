export class Article{
    constructor(
        public author: string,
        public title: string,
        public description: string,
        public long_description: string,
        public url: string,
        public urlToImage: string,
        public publishedAt: Date,
    ){};
}

export class ArticleAdapter{
    decode(raw: any): Article{
        return new Article(
            raw.author,
            raw.title,
            raw.description,
            raw.long_description,
            raw.url,
            raw.urlToImage,
            raw.publishedAt,
        );
    }
}