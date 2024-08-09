const express = require('express');
const articleRoutes = require('./src/articles/routes')
const app = express();
const PORT = process.env.PORT || 3000;
const setupSwagger = require('./swagger')

app.use(express.json())
setupSwagger(app)
// app.use('/', (req, res) => {
//     res.send('Hello World')
// })
app.use('/api/v1/articles', articleRoutes)
app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
})
