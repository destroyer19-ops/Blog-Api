const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Node.js API with Swagger',
    version: '1.0.0',
    description: 'A simple API documentation',
  },
  servers: [
    {
      url: 'http://localhost:3000',
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/articles/routes.js'],
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = (app) => {
    // console.log("user");
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
