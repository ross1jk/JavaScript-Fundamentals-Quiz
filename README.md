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





# 04 Web APIs: Code Quiz

## Your Task

As you proceed in your journey to becoming a full-stack web developer, it’s likely that you’ll be asked to complete a coding assessment, perhaps as part of an interview process. A typical coding assessment is a combination of multiple-choice questions and interactive coding challenges. 

To help you become familiar with these tests and give you a chance to apply the skills from this module, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. This week’s coursework will teach you all the skills you need to succeed in this assignment.


## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```


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


## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.


## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
