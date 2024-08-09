const pool = require('../../db');
const queries = require('./queries');

// Get all articles
const getArticle = async (req, res) => {
    try {
        pool.query(queries.getArticle, (error, results) => {
            return res.status(200).json(results.rows)
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


// Get Article By Id
const getArticleById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        pool.query(queries.getArticleById, [id], (error, results) => {
            const noArticle = !results.rows.length;
            if (noArticle) {
                return res.send('Article not found!');
            }
            pool.query(queries.getArticleById, [id], (error, results) => {
                return res.status(200).send(results.rows)
            })
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// POST Article 
const createArticle = async (req, res) => {
    try {
        const { title, content, author, tags } = req.body
        if(!title || !content || !author || !tags) {
            return res.status(400).send("Required fields are empty")
        }
        pool.query(queries.createArticle, [title, content, author, tags], (error, results) => {
            return res.status(201).send("Article Created")
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message)
    }
}

const updateArticle = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const {title, content, tags} = req.body;
        console.log(req.body);
        pool.query(queries.getArticleById, [id], (error, results) =>{
            const noArticle = !results.rows.length;
            if(noArticle){
                return res.status(404).send("Article not found")
            }

            const existingArticle = results.rows[0];
            const updatedTitle = title || existingArticle.title;
            const updatedContent = content || existingArticle.content;
            const updatedTags = tags || existingArticle.tags;
            
            pool.query(queries.updateArticle, [updatedTitle, updatedContent, updatedTags, id], (error, results) => {
                if (error) throw error
                return res.status(200).send("Article updated")
            })
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message)
    }
}

const deleteArticle = async (req, res) => {
    try {
        const id  = parseInt(req.params.id);
        pool.query(queries.getArticleById, [id], (error, results)=> {
            const noArticle = !results.rows.length;
            if(noArticle) {
                return res.status(404).send("Article not Found")
            }
            pool.query(queries.deleteArticle, [id], (error, results) => {
                if(error) throw error
                return res.status(200).send("Article deleted")
            })
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    getArticle,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
}