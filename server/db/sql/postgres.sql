drop schema if exists poems cascade;

create schema poems;

create table poems.poets (
	id serial not null primary key,
	name text
)

CREATE TABLE poems.poems (
  id serial NOT NULL,
  title varchar(255) DEFAULT NULL,
  poem text,
  poet_id int DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT poems_ibfk_1 FOREIGN KEY (poet_id) REFERENCES poets(id)
)