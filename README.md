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


- **id(INT)**: unique identifier for each row in the task_category table
- **name(STRING)**: category's name


### 2. task

| id | description | date_created | due_date | not_started | in_progress | completed | category_id |
|---|---|---|---|---|---|---|---|
| 111 | grocery shopping | 2023-09-09 | 2023-09-15 | True | False  | False  | 10002 |
| 112 | mop floor | 2023-09-10 | 2023-09-11  |  True | False |  False | 10002 |
| 113 | send mail | 2023-09-11 |  2023-09-12 |  False | False  | True | 10001 |


- **id(INT)**: unique identifier for each row in the task table
- **description(STRING)**: task description
- **date_created(DATE)**: date on which task is created, Default: Current_date
- **due_date(DATE)**: date on which task is due
- **not_started(BOOL)**: bool value to indicate if task is not yet started, Default: True
- **in_progress(BOOL)**: bool value to indicate that task is started and in progress, Default: False
- **completed(BOOL)**: bool value to indicate that task is completed, Default: False
- **category_id(INT)**: foreign key constraint that establishes a relationship between the "category_id" column in the
"task" table and the "id" column in the "category" table