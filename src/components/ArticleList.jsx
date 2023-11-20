import Article from "./Article";


function ArticleList({ posts }) {
    let renderArticles = posts.map(post => (
        <Article
            title={post.title} 
            date={post.date}
            preview={post.preview} 
            key={post.title} 
        />
    ))
    return (
    <main>{renderArticles}</main>
    )
}

export default ArticleList