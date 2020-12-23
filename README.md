# JavaScript Fundamentals Quiz 

## Application Details

This application presents a timed JavaScript fundamentals quiz, that stores high scores so that the application user can gauge their progress to their peers. 

During the journey to becoming a full-stack web developer it is important that you are able to complete coding assessments through combinations of multiple-choice style questions and interactive coding challenges. This application runs in the browsers, with HTML and CSS that is updated dynamically. This is also powered by JavaScript code. 

## Deployed application 
https://ross1jk.github.io/JavaScript-Fundamentals-Quiz/

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```


## Mock-Up

The following animation demonstrates the application functionality:

![code quiz](./images/04-web-apis-homework-demo.gif)


## Folder Structure

To follow industry best practices within the Secure Password Generator repository the folder structure has been updated.

**index.html** Stands on it own, outside of any folder. This code was created by me and contains relative pathways to the JavaScript document, as well as well as the CSS document. 

**README.md** Stands on it own, outside of any folder.

**images** This folder contains the mock-up provided of the JavaScript Fundamentals Quiz

**scripts** This folder contains script.js. This JavaScript file was created by me. 

**styles** This folder contains the style.css document. This CSS file was created by me. 

## HTML 

I have four main elements on my HTML page, all while utilizing the Bootstrap grid system and code. I chose to use Bootstrap because it is clean and polished and provides an intuitive nature and responsive design for the user. 

**Navbar** Contains my countdown timer, which doubles as my score, and a quick link to the high score page to see application users progress

**Start Card** This is static, this provides the starting base of the quiz and JavaScript will use it to start many other elements I have set up. 

**Questions Card** This is my most dynamic card. It is blank. One the quiz is started, functions are used to display questions and answers (buttons), check those answers, and then display your final score. When the final score is displayed the user can enter their initials and store their score to the HighScores Card. 

**HighScores Card** this displays the high scores once they are submitted. The user can clear the scores from local storage or go back to the main screen to take the quiz again. 

## CSS 

This document contains code to provide basic styling to my HTML page. Since I utilized Bootstrap, not much styling was needed, however, I prefer to add wider margins to my elements so there is more space between them. 

I also edited my list for high scores, so that no bullets would appear, I thought the bullets were messy and unneeded. And I added some styling to the font and background color for be more aesthetically pleasing. 



## JavaScript 

This application is very is very JavaScript dependant. The quiz is almost completely blank in HTML, and everything is populated from JavaScript through various functions and variables. 

### Functions

**startTimer** this allows me to track my time at my start button. 

**clearEvent** this allows me to clear my high score list. 

**highscoreDisplay** this will allow me to display my high score card from the top ribbon. So if someone wanted to view the high scores before the quiz they could. Or they could check on their standing. 

**highscore** this renders my high score, once it is submitted by the user. This also sets in the local storage and stores it there. The score uses the name input from the submit form, and the time left for the score. 

**renderQuestion** this allows me to display all of my questions to take. Within this card it references the questions array, and references various buttons and their values. 

**checkAnswer**this takes my question answers, checks it value within the array and keeps track of the users points. If the user gets the question wrong. Time is deducted from the countdown. 

### Variables 
There are many variables that are needed to make this work. I need variables to keep track of my question positions and answers, my time and score, the test itself, the cards where my html is stored, my buttons, my questions, my answers, my arrays. Without having the declared, ithe code wouldn’t work the way ti was supposed to. 

### Arrays 
I have a questions array that consist of objects. The objects are: Question, ans1, ans2, ans3, ans4 and answer. This allows me to have my functions check positions within each object in relation to the question and check if it was right. It also allows me to assign buttons values and keep everything in line with each other. 

I also have an object array to store my score. This helps me keep the user and their score together in local storage. 

### Event Listeners / Buttons 
Finally I have event listeners. All my buttons have event listeners. These allow my functions to start or submit answers. These trigger other events to happen and connect the javascript back to the HTML in a meaningful way. This is what makes the quiz interactive. You will find most of these declared at the end of the javascript documentation. 

## Pseudo Code

Finally you will find my Pseudo code at the bottom of the screen.  I used this to help me plan my various needs fo this project. With so many things going on in one application it helped to keep me organised and on track. 


