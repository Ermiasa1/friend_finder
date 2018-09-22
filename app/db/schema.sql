DROP DATABASE IF EXISTS friendFinder;
CREATE DATABASE friendFinder;
USE friendFinder;

CREATE TABLE friends (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (255) NOT NULL,
  photo TEXT NOT NULL,
  score1 INT NOT NULL,
  score2 INT NOT NULL,
  score3 INT NOT NULL,
  score4 INT NOT NULL,
  score5 INT NOT NULL,
  score6 INT NOT NULL,
  score7 INT NOT NULL,
  score8 INT NOT NULL,
  score9 INT NOT NULL,
  score10 INT NOT NULL,
  PRIMARY KEY  (id)
  );