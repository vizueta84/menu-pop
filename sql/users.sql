DROP TABLE IF EXIST users; 

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    password VARCHAR(255) NOT NULL,
);


INSERT INTO users VALUES (
    null,
    "me",
    "me@test.com"
    "test123"
);