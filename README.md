# Blogging Platform API

## Overview

The Blogging Platform API allows you to manage articles on a blogging platform. You can perform CRUD operations on articles, including retrieving all articles, getting a specific article by ID, creating, updating, and deleting articles.

## Table of Contents

- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [Get All Articles](#get-all-articles)
  - [Create Article](#create-article)
  - [Get Article by ID](#get-article-by-id)
  - [Update Article by ID](#update-article-by-id)
  - [Delete Article by ID](#delete-article-by-id)
- [Swagger Documentation](#swagger-documentation)
- [Database Schema](#database-schema)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- PostgreSQL (version 13 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/destroyer19-ops/Blog-Api.git
   cd Blog-Api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your database configuration in a `.env` file:
   ```env
   DB_USER=postgres
   DB_HOST=localhost
   DB_PORT=5433
   DB_NAME=blog
   DB_PASSWORD=Portable-@19
   PORT=3000
   ```

4. Run database migrations (if applicable).

5. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Get All Articles

- **URL**: `/api/v1/articles`
- **Method**: `GET`
- **Success Response**:
  - **Code**: 200
  - **Content**:
    ```json
    {
      "data": [
        {
          "id": 1,
          "title": "Sample Article",
          "content": "This is a sample article.",
          "author": "Author Name",
          "tags": ["tag1", "tag2"]
        }
      ]
    }
    ```

### Create Article

- **URL**: `/api/v1/articles`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "title": "New Article",
    "content": "This is the content of the new article.",
    "author": "Author Name",
    "tags": ["tag1", "tag2"]
  }
  ```
- **Success Response**:
  - **Code**: 201
  - **Content**:
    ```json
    {
      "message": "Article Created",
      "data": {
        "id": 2,
        "title": "New Article",
        "content": "This is the content of the new article.",
        "author": "Author Name",
        "tags": ["tag1", "tag2"]
      }
    }
    ```

### Get Article by ID

- **URL**: `/api/v1/articles/{id}`
- **Method**: `GET`
- **URL Params**:
  - **id**: Integer (ID of the article)
- **Success Response**:
  - **Code**: 200
  - **Content**:
    ```json
    {
      "data": {
        "id": 1,
        "title": "Sample Article",
        "content": "This is a sample article.",
        "author": "Author Name",
        "tags": ["tag1", "tag2"]
      }
    }
    ```
- **Error Response**:
  - **Code**: 404
  - **Content**:
    ```json
    {
      "message": "Article not found!"
    }
    ```

### Update Article by ID

- **URL**: `/api/v1/articles/{id}`
- **Method**: `PUT`
- **URL Params**:
  - **id**: Integer (ID of the article)
- **Request Body**:
  ```json
  {
    "title": "Updated Title",
    "content": "Updated content",
    "tags": ["tag1", "tag2"]
  }
  ```
- **Success Response**:
  - **Code**: 200
  - **Content**: `"Article updated"`

- **Error Response**:
  - **Code**: 404
  - **Content**:
    ```json
    {
      "message": "Article not found"
    }
    ```

### Delete Article by ID

- **URL**: `/api/v1/articles/{id}`
- **Method**: `DELETE`
- **URL Params**:
  - **id**: Integer (ID of the article)
- **Success Response**:
  - **Code**: 200
  - **Content**: `"Article deleted"`

- **Error Response**:
  - **Code**: 404
  - **Content**:
    ```json
    {
      "message": "Article not Found"
    }
    ```

## Swagger Documentation

The API is documented using Swagger. You can view the interactive API documentation at:

```
http://localhost:3000/api-docs
```

## Database Schema

The database schema includes a single table, `articles`, with the following columns:

- `id`: Integer (Primary Key)
- `title`: String
- `content`: String
- `author`: String
- `tags`: Array of Strings

