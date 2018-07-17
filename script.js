// coding challenge console log quiz 
 
// function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
// }

// var questionArray = [
//     'What is my fave color?',
//     'How old am I?'
// ];

// var howOldAnswers = [
//     '13',
//     '15',
//     '26',
//     '28'
// ];

// function questionSelect () {
//     var selector = parseInt((Math.random() * 2));
//     console.log(questionArray[selector]);
//     writeAnswer(questionArray[selector], selector);

    
//         var userAnswer = prompt("Please enter your answer", name);
//         if (userAnswer == '26' && selector === 1){
//             console.log("correct answer" + userAnswer);
//         } else {
//             console.log("incorrect");
//         }
        
// }

// function writeAnswer(answer, selector){
//     console.log('The question is "' + selector + ': ' + answer + '" Please choose an answer.');
// }

// questionSelect();

//got basic functionality working but due to time constraints will continue to move on as bootcamp is looming. 

(function (){



function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++){
        console.log(i + ':' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = 
function(ans, callback) {
    var sc;
    if (ans === this.correct) {
        console.log('Correct answer!');
        sc = callback(true);

    } else {
        console.log('Incorrect answer!');
        sc = callback(false);
    }
    this.displayScore(sc);
}

Question.prototype.displayScore = function(score){
    console.log('Your current score is: ' + score);
    console.log('-------------------------------------------');
}

var q1 = new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0);

var q2 = new Question('What is the name of the bootcamp I will attend in August?', ['Bootcamp Blitz', 'DevAcademy', 'Dev Now NZ'], 1);

var q3 = new Question('What best desribes coding?', ['boring', 'repetitive', 'impossible', 'fun'], 3);

function score () {
    var sc = 0;
    return function(correct) {
        if(correct){
            sc++;
        }
        return sc;
    }
}

var keepScore = score();

function nextQuestion() {

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = prompt('Please select the correct answer and view the console.');




if (answer !== 'exit'){
    questions[n].checkAnswer(parseInt(answer), keepScore);
    nextQuestion();
}
}
nextQuestion();
})();