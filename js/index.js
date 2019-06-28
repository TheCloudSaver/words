var question = document.querySelector('#word');
var progress = document.querySelector('#progress');

var input = document.querySelector('.input');
var response = document.querySelector('.response');
var submit = document.querySelector('.submit');

var form = document.querySelector('.form');
var hero = document.querySelector('.hero');

var i = 0;
var count = 1;

var name;
var list;

score = 0;
mistakes = [];

submit.addEventListener("click", function (event) {
    event.preventDefault();
    checkAnswer(list[i].answer);
});

response.style.display = 'none';
submit.style.display = 'none';

question.innerHTML = 'Input a file containing the test';
progress.style.display = 'none';

function start() {
    hero.innerHTML = 'Words - ' + name;
    window.document.title = name + ' - Words 📚';

    response.style.display = 'block';
    submit.style.display = 'block'; 
    progress.style.display = 'block';

    input.style.display = 'none';
    askQuestion();
}

(function () {

    function onChange(event) {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event) {
        var data = JSON.parse(event.target.result);
        console.log('File ' + data.name + ' is loaded!');

        name = data.name;
        list = data.words;
        start();
    }

    input.addEventListener('change', onChange);

}());

function askQuestion() {
    reset();

    question.innerHTML = list[i].question;
    progress.innerHTML = count + '/' + list.length;
}

function checkAnswer(answer) {
    if (response.value == answer) {
        console.log("Correct answer was given.");
        score++;
        
        response.style.border = "1px solid #2ecc71";
    } else {
        console.log("Incorrect answer was given. Correct answer was " + answer);
        response.style.border = "1px solid #e74c3c";
        mistakes.push(i);
    }
    
    response.style.transition = ".2s";
    update();

    if (i < list.length) {
        setTimeout(askQuestion, 1000);
    } else {
        setTimeout(endTest, 1000);
    }
}

function reset() {
    response.style.border = "1px solid #ccc";
    form.reset();
}

function update() {
    i++;
    count++;
}

function endTest() {
    reset();

    response.disabled = true;
    submit.disabled = true;
    question.innerHTML = 'You got ' + score + ' right.';
    progress.innerHTML = 'That is ' + (score / list.length) * 100 + '%';
}