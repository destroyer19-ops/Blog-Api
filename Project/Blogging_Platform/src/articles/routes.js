const { Router } = require('express');
const controller = require('./controller');
const router = Router();

/**
 * @swagger
 * /api/v1/articles:
 *   get:
 *     summary: Get all articles
 *     responses:
 *       200:
 *         description: List of articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 *                   author:
 *                     type: string
 *                   tags:
 *                     type: string
 */
router.get('/', controller.getArticle);

/**
 * @swagger
 * /api/v1/articles:
 *   post:
 *     summary: Add a new Article
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *               tags:
 *                 type: string
 *     responses:
 *       201:
 *         description: Article created
 */
router.post('/', controller.createArticle);

/**
 * @swagger
 * /api/v1/articles/{id}:
 *   get:
 *     summary: Get an article by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the article to get
 *     responses:
 *       200:
 *         description: An article
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *                 author:
 *                   type: string
 *                 tags:
 *                   type: string
 *       404:
 *         description: Article not found
 */
router.get('/:id', controller.getArticleById);

/**
 * @swagger
 * /api/v1/articles/{id}:
 *   put:
 *     summary: Update an article by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the article to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *               tags:
 *                 type: string
 *     responses:
 *       200:
 *         description: Article updated
 *       404:
 *         description: Article not found
 */
router.put('/:id', controller.updateArticle);

/**
 * @swagger
 * /api/v1/articles/{id}:
 *   delete:
 *     summary: Delete an article by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the article to delete
 *     responses:
 *       200:
 *         description: Article deleted
 *       404:
 *         description: Article not found
 */
router.delete('/:id', controller.deleteArticle);

module.exports = router;
