CREATE TABLE task_category (
	id serial primary key,
	name varchar(250) NOT NULL
);

CREATE TABLE task (
	id serial primary key,
	description varchar(250) NOT NULL,
	date_created DATE DEFAULT CURRENT_DATE,
	due_date DATE,
    not_started BOOL DEFAULT TRUE,
    in_progress BOOL DEFAULT FALSE,
	completed BOOL DEFAULT FALSE,
	category_id int NOT NULL REFERENCES category 
);