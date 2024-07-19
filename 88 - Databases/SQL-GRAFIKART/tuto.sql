-- SQLite
/*
recipes
    - title
    - content
    - slug
    - duration (en minutes)
    - online
    - createdAt
*/

-- ENABLING FOREIGN KEY SUPPORT SQLITE
PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS recipes;

CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT
);

INSERT INTO categories (title) 
VALUES
    ('Plat'),
    ('Dessert');

CREATE TABLE recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    title VARCHAR(150) NOT NULL,
    slug VARCHAR(50) NOT NULL UNIQUE,
    content TEXT,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

INSERT INTO recipes (title, slug, category_id)
VALUES
    ('Crème anglaise', 'creme-anglaise', 2),
    ('Soupe', 'soupe', 1),
    ('Salade de fruit', 'salade-de-fruit', 2);

-- DELETE FROM categories WHERE id = 2;

-- SELECT * FROM recipes;
-- SELECT * FROM categories;


SELECT r.id, r.title, c.title AS category -- * 
FROM recipes r -- alias r
LEFT JOIN categories c ON r.category_id = c.id; -- recipes.category_id = categories.id
-- WHERE c.title = 'Dessert';


/* 
CREATE TABLE recipes (
    id INTEGER PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    slug VARCHAR(50) NOT NULL UNIQUE,
    content TEXT DEFAULT 'hello' NOT NULL,
    duration SMALLINT DEFAULT 10 NOT NULL,
    online BOOLEAN,
    createdAt DATETIME
);
*/

-- CREATE UNIQUE INDEX idx_slug ON recipes (slug);

-- UPDATE recipes SET slug = 'soupe2' WHERE ID = 4;

-- EXPLAIN QUERY PLAN SELECT * recipes WHERE slug = idx_slug;

-- PRAGMA index_list('recipes');

-- DROP INDEX idx_slug;

/*  
INSERT INTO recipes (
        title, 
        slug,
        online, 
        createdAt
    ) VALUES ( 
        'Soupe1',
        'soupe-2',
        FALSE,
        1721045368
    );
*/

-- UPDATE recipes SET content = NULL

-- DROP TABLE recipes;

-- DELETE FROM recipes WHERE id = 2;

-- UPDATE recipes SET title = 'Soupe de légume' WHERE title = 'Soupe inmangeable';

-- SELECT * FROM recipes;

-- DROP TABLE recipes;

/* 
    TRUE AND TRUE = TRUE
    TRUE AND FALSE = FALSE
    FALSE AND FALSE = FALSE

    TRUE OR FALSE = TRUE
    FALSE OR TRUE = TRUE
    TRUE OR TRUE = TRUE
    FALSE OR FALSE = FALSE
*/