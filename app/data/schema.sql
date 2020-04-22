DROP DATABASE IF EXISTS FriendFinder_db;

CREATE DATABASE FriendFinder_db ;

USE FriendFinder_db ;

CREATE TABLE friends (

id INT NOT NULL AUTO_INCREMENT ,
friendName VARCHAR(200) NOT NULL ,
score INT ,
PRIMARY KEY(id) 


);

CREATE TABLE survey (

id INT NOT NULL AUTO_INCREMENT ,
question VARCHAR(400) NOT NULL ,
PRIMARY KEY (id)
) ;

CREATE TABLE answers (

id INT NOT NULL AUTO_INCREMENT ,
answer INT ,
answer_score INT , 
PRIMARY KEY (id) 
);

INSERT INTO friends(friendName, score) VALUES ("Bob", 37)  ;
INSERT INTO friends(friendName, score) VALUES ("Sarah", 25)  ;
INSERT INTO friends(friendName, score) VALUES ("Steve", 48)  ;
INSERT INTO friends(friendName, score) VALUES ("Karen", 36)  ;
INSERT INTO friends(friendName, score) VALUES ("Francisco", 39)  ;
INSERT INTO friends(friendName, score) VALUES ("Ashley", 28)  ;
INSERT INTO friends(friendName, score) VALUES ("Samuel", 45)  ;
INSERT INTO friends(friendName, score) VALUES ("Samantha", 40)  ;
INSERT INTO friends(friendName, score) VALUES ("Elliot", 49)  ;
INSERT INTO friends(friendName, score) VALUES ("Nora", 33)  ;
INSERT INTO friends(friendName, score) VALUES ("Mark", 38)  ;
INSERT INTO friends(friendName, score) VALUES ("Emily", 41)  ;

INSERT INTO survey (question) VALUE ("How much do you like anime? On a scale from 1-5") ;
INSERT INTO survey (question) VALUE ("How much do you like fruit? On a scale from 1-5") ;
INSERT INTO survey (question) VALUE ("How much do you like cars? On a scale from 1-5") ;
INSERT INTO survey (question) VALUE ("How much do you like coding? On a scale from 1-5") ;
INSERT INTO survey (question) VALUE ("How much do you like the mountains? On a scale from 1-5") ;
INSERT INTO survey (question) VALUE ("How much do you like the beach? On a scale from 1-5") ;
INSERT INTO survey (question) VALUE ("How much do you like world domination? On a scale from 1-5") ;
INSERT INTO survey (question) VALUE ("How much do you desire to be the supreme being? On a scale from 1-5") ;
INSERT INTO survey (question) VALUE ("How likely are you to join a cult of the supreme being? On a scale from 1-5") ;
INSERT INTO survey (question) VALUE ("How much do you like reality tv? On a scale from 1-5") ;

SELECT * FROM survey ;

SELECT * FROM friends ;

