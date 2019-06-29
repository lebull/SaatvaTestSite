import { ArticleAdapter } from "./article";

describe('Article Model', () => {
    let articleAdapter = new ArticleAdapter();

    it('should decode an article', ()=>{
        let newArticle = articleAdapter.decode(
            {
                "author": "Author",
                "title": "Title",
                "description": "Description",
                "long_description": "Long Description",
                "url": "Url",
                "urlToImage": "Url To Image",
                "publishedAt": "2017-09-28T01:00:00Z",
            }
        );

        expect(newArticle).toBeTruthy();
        expect(newArticle.author).toBe("Author");
        expect(newArticle.publishedAt).toBeTruthy();
    });
})