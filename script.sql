-- Migration Script

-- 1. Create a new table called 'articles'
CREATE TABLE IF NOT EXISTS articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    tags TEXT[],
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Alter an existing table 'authors' to add a new column 'birthdate'
ALTER TABLE authors
ADD COLUMN birthdate DATE;

-- 3. Insert sample data into the 'articles' table
INSERT INTO articles (title, content, author, tags, published_at)
VALUES
    ('The Rise of AI', 'Content about AI...', 'John Doe', ARRAY['AI', 'Technology'], '2024-08-09 10:00:00'),
    ('The Future of Space Exploration', 'Content about space...', 'Jane Smith', ARRAY['Space', 'Exploration'], '2024-08-10 11:00:00');

-- If you need to create an index for performance, you can add:
CREATE INDEX idx_articles_title ON articles(title);

-- If you need to create a foreign key relationship, you can add:
-- ALTER TABLE articles
-- ADD CONSTRAINT fk_author
-- FOREIGN KEY (author_id)
-- REFERENCES authors(id);

-- End of Migration Script
