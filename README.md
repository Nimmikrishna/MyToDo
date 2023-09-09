# <span style="color: lightgreen;">✅ TickUrTasks</span>

This is a Basic Todo application built on <span style="color: yellow;">**Node, Express, SQL, and React**</span>.  
It has features to add a task, delete a task, mark task as complete, in progress, view all tasks.  
The application also highlights tasks are due within 2 days.

## DB Schema

### 1. task_category

| id     | name      |
| --- |   ---       |
| 10001        | Work         |
| 10002         | Personal         |


- **id**: unique identifier for each row in the task_category table, INT
- **name**: category's name, STRING


### 2. task

| id | description | date_created | due_date | not_started | in_progress | completed | category_id |
|---|---|---|---|---|---|---|---|
| 111 | grocery shopping | 2023-09-09 | 2023-09-15 | True | False  | False  | 10002 |
| 112 | mop floor | 2023-09-10 | 2023-09-11  |  True | False |  False | 10002 |
| 113 | send mail | 2023-09-11 |  2023-09-12 |  False | False  | True | 10001 |


- **id**: unique identifier for each row in the task table, INT
- **description**: task description, STRING
- **date_created**: date on which task is created, DATE
- **due_date**: date on which task is due, DATE
- **not_started**: bool value to indicate if task is not yet started, BOOL
- **in_progress**: bool value to indicate that task is started and in progress, BOOL
- **completed**: bool value to indicate that task is completed
- **category_id**: foreign key constraint that establishes a relationship between the "category_id" column in the
"task" table and the "id" column in the "category" table, INT