
# Personal Blogging Platform API

This is a RESTful API for a personal blogging platform. The API supports CRUD operations for articles, including listing articles, retrieving a single article by ID, creating, updating, and deleting articles.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Swagger Documentation](#swagger-documentation)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

```sh
git clone https://github.com/destroyer19-ops/BLOGGING_PLATFORM.git
cd BLOGGING_PLATFORM
```

2. **Install dependencies:**

```sh
npm install
```

3. **Set up PostgreSQL database:**

Create a PostgreSQL database and configure the connection in `db.js`:

```javascript
const { Pool } = require('pg');

const pool = new Pool({
    user: 'your_user',
    host: 'localhost',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});

module.exports = pool;
```

4. **Run the server:**

```sh
npm start
```

The server will be running at `http://localhost:3000`.

## Usage

### API Endpoints

- **GET /api/v1/articles**: Get all articles
- **GET /api/v1/articles/:id**: Get article by ID
- **POST /api/v1/articles**: Create a new article
- **PUT /api/v1/articles/:id**: Update an article by ID
- **DELETE /api/v1/articles/:id**: Delete an article by ID

### Request/Response Examples

#### Get all articles

```sh
GET /api/v1/articles
```

Response:

```json
[
  {
    "id": 1,
    "title": "First Article",
    "content": "This is the content of the first article.",
    "author": "Author 1",
    "tags": "tag1, tag2",
    "published_date": "2023-07-19T00:00:00.000Z"
  },
  ...
]
```

#### Get article by ID

```sh
GET /api/v1/articles/1
```

Response:

```json
{
  "id": 1,
  "title": "First Article",
  "content": "This is the content of the first article.",
  "author": "Author 1",
  "tags": "tag1, tag2",
  "published_date": "2023-07-19T00:00:00.000Z"
}
```

#### Create a new article

```sh
POST /api/v1/articles
Content-Type: application/json

{
  "title": "New Article",
  "content": "This is the content of the new article.",
  "author": "Author 2",
  "tags": "tag3, tag4"
}
```

Response:

```json
{
  "message": "Article Created"
}
```

#### Update an article by ID

```sh
PUT /api/v1/articles/1
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "This is the updated content of the article.",
  "tags": "tag1, tag3"
}
```

Response:

```json
{
  "message": "Article updated"
}
```

#### Delete an article by ID

```sh
DELETE /api/v1/articles/1
```

Response:

```json
{
  "message": "Article deleted"
}
```

### Swagger Documentation

Swagger documentation is available at `http://localhost:3000/api-docs`.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any changes.

## License

This project is licensed under the MIT License.

---
