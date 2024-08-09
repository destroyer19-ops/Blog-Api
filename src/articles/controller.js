const pool = require('../../db');
const queries = require('./queries');

// Get all articles
const getArticle = async (req, res) => {
    try {
        const results = await pool.query(queries.getArticle)
            return res.status(200).json({data: results.rows})
    } catch (error) {
        console.error(error.message); // Better logging practice
        return res.status(500).send(error.message);
    }
}


// Get Article By Id
const getArticleById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const results = await pool.query(queries.getArticleById, [id])
            const noArticle = !results.rows.length;
            if (noArticle) {
                return res.json({message : 'Article not found!'});
            }
            return res.status(200).json({data: results.rows})
    } catch (error) {
        console.error(error.message); // Better logging practice
        return res.status(500).json({message: error.message})
    }
}

// POST Article 
const createArticle = async (req, res) => {
    try {
        const { title, content, author, tags } = req.body;

        // Check for required fields
        if (!title || !content || !author || !tags) {
            return res.status(400).json({ message: "Required fields are empty" });
        }

        // Execute the query to create the article
        const result = await pool.query(queries.createArticle, [title, content, author, tags]);

        // Check if the article was created
        if (result.rowCount === 0) {
            return res.status(500).json({ message: "Article creation failed" });
        }

        // Return a success message and the newly created article's ID
        return res.status(201).json({
            message: "Article Created",
            data: {
                id: result.rows[0].id, // Adjust based on how your database returns the ID
                title,
                content,
                author,
                tags
            }
        });
    } catch (error) {
        console.error(error.message); // Better logging practice
        return res.status(500).json({ message: error.message });
    }
};

const updateArticle = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const {title, content, tags} = req.body;

        // Check if the ID is valid
        if (isNaN(id)) {
            return res.status(400).json({message: "Invalid article ID"});
        }

        const results = await pool.query(queries.getArticleById, [id])
            const noArticle = !results.rows.length;
            if(noArticle){
                return res.status(404).send("Article not found")
            }

            const existingArticle = results.rows[0];
            const updatedTitle = title || existingArticle.title;
            const updatedContent = content || existingArticle.content;
            const updatedTags = tags !== undefined ? tags : existingArticle.tags;
            
            await pool.query(queries.updateArticle, [updatedTitle, updatedContent, updatedTags, id]) 
                return res.status(200).send("Article updated")        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: error.message})
    }
}

const deleteArticle = async (req, res) => {
    try {
        const id  = parseInt(req.params.id);
        const results = await pool.query(queries.getArticleById, [id])
            const noArticle = !results.rows.length;
            if(noArticle) {
                return res.status(404).send("Article not Found")
            }
            await pool.query(queries.deleteArticle, [id]) 
                if(error) throw error
                return res.status(200).send("Article deleted")        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
module.exports = {
    getArticle,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
}