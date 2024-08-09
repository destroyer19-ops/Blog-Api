
const getArticle = "SELECT * FROM articles";
const getArticleById = "SELECT * FROM articles WHERE id = $1";
const createArticle = "INSERT INTO articles (title, content, author, tags) VALUES ($1, $2, $3, $4)";
const updateArticle = "UPDATE articles SET title = $1, content = $2, tags = $3 WHERE id = $4"
const deleteArticle = "DELETE FROM articles WHERE id = $1"

module.exports = {
    getArticle,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
}