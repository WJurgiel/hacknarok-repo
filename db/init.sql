USE appdb;

CREATE TABLE IF NOT EXISTS languages(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    surname VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password TEXT,
    role ENUM('non-premium', 'premium') NOT NULL,
    isBlocked BOOLEAN NOT NULL DEFAULT FALSE,
    age INT,
    gender ENUM('man', 'woman', 'other'),
    mainLanguage INT,
    FOREIGN KEY (mainLanguage) REFERENCES languages(id)
);

CREATE TABLE IF NOT EXISTS user_learning_languages(
    user_id INT,
    language_id INT,
    PRIMARY KEY (user_id, language_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (language_id) REFERENCES languages(id)
);

CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message VARCHAR(1000),
    fromUser INT NOT NULL,
    toUser INT NOT NULL,
    date DATETIME NOT NULL,
    FOREIGN KEY (fromUser) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (toUser) REFERENCES users(id) ON DELETE CASCADE

);
LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/users.csv'
INTO TABLE users
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS 
(name,surname,email,password,role,isBlocked,age,gender,mainLanguage);

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/messages.csv'
INTO TABLE messages
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS 
(message,fromUser,toUser,date);

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/languages.csv'
INTO TABLE languages
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS 
(name);
