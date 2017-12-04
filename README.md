# HW  Eat-Da-Burger
Eat-Da-Burger is a restaurant app that lets users input and delete the names of burgers they'd like to eat

## Live Link 
	(under construction)
  
## Active Video
  ![Eat-Da-Burger](./eat-da-burger.mov)

## How to use the Application

1. In the text area type in the name of a burger that you would like to eat, and hit the 'Submit' button

2. Burgers in the MySQL database will appear in the list named 'UnEaten Burgers'

3. When you click on the uneaten burger, it will tell the database that it is now eaten and reloading the page to show the changes in the database.  The burger will now show up under the list named 'Eaten Burgers'

4. When you click on the eaten burger, it will tell the database to remove the burger from the database and reload the page once again.  The burger will now be removed from the screen.

5. If you do not enter anything in the text area and hit submit, you will get an error message dynamically added to the screen alerting you to enter text


# Technologies Used 

- Node.js
- MySQL Workbench 
- Node Packages (express, mysql, express-handlebars, body-parser, method-override, nodemon)
- Materialize
