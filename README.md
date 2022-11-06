# CFG-Final-Project---Team-3

This is the submission for the CFG Final Project

Documentation Link: https://docs.google.com/document/d/1xNoEcV3Je1nqQ3EKt0GezloXnD6sOYrga8pv8VUV1Ko/edit?usp=sharing


LAP-STOP

An organisational tool for individuals working-from-home. There is a login-in page for users to access their personal dashboard.On the dashboard there is a pomodoro timer, to help the user focus on tasks and manage their time. It also features a to-do list, so users can manage their upcoming tasks by adding, updating and deleting them. An API generates motivational quotes and is synchronised to the user timezone to create personalisation. The user-interface is friendly with clear, non-cluttered information (text) guiding users through pages and functions. 


INSTALLATION 

To start our project, Strapi needs to be installed first as a mock server.
npx create-strapi-app@latest my-project

When http://localhost:1337 is started, register first, then, go to the content manager and create a new table named “todo”, in this table, make sure you create “todo_item”, which is long text, and “done”, which is boolean. You can leave this table empty or you can add some data into it.
After creating a table, go to settings, in USERS & PERMISSIONS PLUGIN, choose Roles, go to public then, set the permissions for todo, api address will be shown on the right side bar.

When everytime need to start Strapi, use npm start.

Download all the files in your local computer, use “npm i” to install React and dependencies.

To activate the email-subscription use: npm install @formspree/react


NAVIGATION

Homepage: 
This is the first page you will encounter. It will consist of an email subscription form, enter your personal email and name - this information will be sent to the development team’s email.In addition is the ‘get started’ button - this button will redirect you to the log-in page. 

Log-in page:
In this page, you’ll be prompted to enter your credentials - a name, username and password. If this is successful, you’ll be redirected to the user-dashboard. If not, then you’ll be alerted with an error message. 
For the case of a demo use:
name: (Feel free to input any name)
​​email: admin@admin.com
password:admin123
 
User-Dashboard
This page will display the functions which include the API motivational quote generator, timer and the to-do lists. Below details the possible user interactions.

Random Quote Generator :
Generate a random quote, by clicking the “New Quote” button
Listen to the quote
Copy the quote to their clipboard
Generate a pre-populated tweet with the quote and share to twitter

ToDo List:
Add, delete and edit task
Tick the checkbox to mark tasks as complete
Clear the list of tasks, by selecting the clear task button at the bottom right hand corner

Pomodoro:
Hover over text, for instructions on how to use feature
Start a Pomodoro session , by clicking the Pomodoro button(timer counts down from 25 minutes)
Start a Short Break session, by clicking Short Break( timer counts down from 5 minutes)
To Reset either session, click on the button again
Pause Session, with Pause button
Resume session with Resume button
Document title displays the time left on the countdown, so it is viewable from the tab

Calendar:
Users can navigate between months, years and return to the current date by selecting TODAY on the right hand side below the calendar.

Log-Out: 
This can be found at the bottom-left of the sidebar and will redirect you to the homepage. 
