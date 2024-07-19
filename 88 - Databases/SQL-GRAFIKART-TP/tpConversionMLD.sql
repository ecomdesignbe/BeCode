-- SQLite

PRAGMA FOREIGN_KEYS = ON;

DROP TABLE IF EXISTS ingredients;
DROP TABLE IF EXISTS categories_recipes;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS users;



CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    username VARCHAR(150)NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE
);

CREATE TABLE recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    title VARCHAR(150) NOT NULL,
    slug VARCHAR(150) NOT NULL,
    date DATETIME,
    duration INTEGER DEFAULT 0 NOT NULL,
    user_id INETEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    title VARCHAR(150)
);

CREATE TABLE categories_recipes (
    recipe_id INTERGER NOT NULL,
    category_id INTEGER NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    UNIQUE (recipe_id, category_id)
);

CREATE TABLE ingredients (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name VARCHAR(150)    
);

CREATE TABLE ingredients_recipes (
    recipe_id INTERGER NOT NULL,
    ingredients_id INTEGER NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE CASCADE,
    UNIQUE (recipe_id, ingredient_id)
);

INSERT INTO users (username, email) VALUES 
    ('John Doe', 'john@doe.com')
;

INSERT INTO categories (title) VALUES
    ('Plat'),
    ('De
    ssert'),
    ('Gateau')
;

INSERT INTO recipes (title, slug, duration, user_id) VALUES
    ('Soupe', 'soupe', 10, 1),
    ('Madeleine', 'madeleine', 30, 1)
;

INSERT INTO categories_recipes (recipe_id, category_id) VALUES
    (1, 1),
    (2, 2),
    (2, 3)
;

SELECT r.title, c.title as category
FROM recipes r
JOIN categories_recipes cr ON cr.recipe_id = r.id
JOIN categories c ON cr.category_id = c.id
;