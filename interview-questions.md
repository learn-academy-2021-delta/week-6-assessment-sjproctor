# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer:

  Researched answer: Cohort has_many Students, Student belongs_to Cohort, Student has the foreign key because the foreign key is always on the belongs to side, name of the foreign column is cohort_id:integer, generate migration to fix the missing column

  rails g migration add_foreign_key


2. Which RESTful routes must always be passed params? Why?

  Your answer:

  Researched answer: Edit, Update, Show, Destroy - have to know which item we are performing the action on



3. Name three rails generator commands. What is created by each?

  Your answer:

  Researched answer: rails g model - model class, migration // rails g controller - controller class, view folder // rails g rspec - testing folders // rails g migration - migration // rails g resource - model, controller, view folder, migration // rails g scaffold - controller, model, views folders, testing



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students          index - get all the data from the db

method="POST"   /students          create - create a new student instance in the db

method="GET"    /students/new      new - form for creating a new student

method="GET"    /students/2        show - displaying the student with id 2

method="GET"    /students/2/edit   edit - form for editing a specific student

method="PATCH"  /students/2        update - modifying the instance of the specific student

method="DELETE" /students/2        destroy - removing the instance of the student with the id 2



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
