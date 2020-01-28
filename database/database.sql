CREATE DATABASE tecktransit;

USE tecktransit;

CREATE TABLE courses (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    imageText VARCHAR(255),
    imageUrl VARCHAR(255),
    credits INT(11),
    price INT(11),
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)