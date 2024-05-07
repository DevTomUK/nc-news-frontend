import { Link } from "react-router-dom"

function ArticleCard({article}) {
    return <Link to={`/articles/${article.article_id}`}>
                    <li className="article-card">
                        <img className="article-card-image" src={article.article_img_url} />
                        <div className="vertical-flex">
                            <div className="article-card-right">
                                <div className="article-card-text">
                                    <h3>{article.title}</h3>
                                </div>

                                <div className="article-card-info">
                                    <p>Topic: {article.topic}</p>
                                    <p>Comments: {article.comment_count}</p>
                                    <p>Votes: {article.votes}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </Link>
}

export default ArticleCard