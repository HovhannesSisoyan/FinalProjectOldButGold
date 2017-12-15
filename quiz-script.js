var questions = [
    {
        question: "<img src='1.JPG'/> ",
        option1: "Quantity A is greater.",
        option2: "Quantity B is greater.",
        option3: "The two quantities are equal.",
        option4: "The relationship cannot be determined from the information given.",
        answer: "3"
    },
    {
        question: "<img src='2.JPG'/>",
        option1: "Quantity A is greater.",
        option2: "Quantity B is greater.",
        option3: "The two quantities are equal.",
        option4: "The relationship cannot be determined from the information given.",
        answer: "3"
    },
    {
        question: "<img src='3.JPG'/>",
        option1: "Quantity A is greater.",
        option2: "Quantity B is greater.",
        option3: "The two quantities are equal.",
        option4: "The relationship cannot be determined from the information given.",
        answer: "4"
    },
    {
        question: "<img src='4.JPG'/>",
        option1: "Quantity A is greater.",
        option2: "Quantity B is greater.",
        option3: "The two quantities are equal.",
        option4: "The relationship cannot be determined from the information given.",
        answer: "1"
    },
    {
        question: "<img src='5.JPG'/>",
        option1: "Quantity A is greater.",
        option2: "Quantity B is greater.",
        option3: "The two quantities are equal.",
        option4: "The relationship cannot be determined from the information given.",
        answer: "2"
    },
    {
        question: "<img src='6.JPG'/>",
        option1: "Quantity A is greater.",
        option2: "Quantity B is greater.",
        option3: "The two quantities are equal.",
        option4: "The relationship cannot be determined from the information given.",
        answer: "1"
    },
    {
        question: "<img src='7.JPG'/>",
        option1: "Quantity A is greater.",
        option2: "Quantity B is greater.",
        option3: "The two quantities are equal.",
        option4: "The relationship cannot be determined from the information given.",
        answer: "1"
    },
    {
        question: "<img src='8.JPG'/>",
        option1: "Quantity A is greater.",
        option2: "Quantity B is greater.",
        option3: "The two quantities are equal.",
        option4: "The relationship cannot be determined from the information given.",
        answer: "2"
    },
    {
        question: "<img src='9.JPG'/>",
        option1: "2x + 4",
        option2: "3x - 2",
        option3: "3x + 2",
        option4: "4x - 2",
        answer: "4"
    },
    {
        question: "<img src='10.JPG'/>",
        option1: "45",
        option2: "105",
        option3: "135",
        option4: "150",
        answer: "4"
    },
    {
        question: "<img src='11.JPG'/>",
        option5: "12",
        option6: "17",
        option7: "19",
        option8: "21",
        option9: "24",
        answer: '789'
    },
    {
        question: "<img src='12.JPG'/>",
        option5: "171",
        option6: "180",
        option7: "216",
        option8: "252",
        option9: "315",
        answer: "6789"
    },
    {
        question: "<img src='13.JPG'/>",
        option5: "88",
        option6: "86",
        option7: "85",
        option8: "83",
        option9: "80",
        answer: "5678"
    },
    {
        question: "<img src='14.JPG'/>",
        answer: "8"
    },
    {
        question: "<img src='15.JPG'/>",
        answer: "5"
    },
    {
        question: "<img src='16.JPG'/>",
        option1: "25%",
        option2: "30%",
        option3: "45%",
        option4: "70%",
        answer: "3"
    },
    {
        question: "<img src='17.JPG'/>",
        option5: "7",
        option6: "10",
        option7: "14",
        option8: "18",
        option9: "22",
        answer: "89"
    },
    {
        question: "<img src='18.JPG'/>",
        option5: "Team X",
        option6: "Team Y",
        option7: "Team Z",
        option8: "Team Q",
        option9: "Team R",
        answer: "9"
    },
    {
        question: "<img src='19.JPG'/>",
        option5: "20%",
        option6: "25%",
        option7: "30%",
        option8: "35%",
        option9: "40",
        answer: "6789"
    },
    {
        question: "<img src='20.JPG'/>",
        option1: "53%",
        option2: "67%",
        option3: "71%",
        option4: "86%",
        answer: "4"
    }
];

let currentQuestion = 0;
let score = 0;
let totQuestions = questions.length;
let container1 = document.getElementById('quizContainer1');
let container2 = document.getElementById('quizContainer2');
let container3 = document.getElementById('quizContainer3');
let questionEl1 = document.getElementById('question1');
let questionEl2 = document.getElementById('question2');
let questionEl3 = document.getElementById('question3');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');
let opt5 = document.getElementById('opt5');
let opt6 = document.getElementById('opt6');
let opt7 = document.getElementById('opt7');
let opt8 = document.getElementById('opt8');
let opt9 = document.getElementById('opt9');
let nextButton = document.getElementById('nextButton');
let resultCont = document.getElementById('result');


let secondsLabel = document.getElementById('seconds'),
    minutesLabel = document.getElementById('minutes'),
    totalSeconds = 0,
    startButton = document.getElementById('start'),
    stopButton = document.getElementById('stop'),
    timer = null;

function start_timer() {
    if (!timer) {
        timer = setInterval(setTime, 1000);
    }
}

function stop_timer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function setTime() {
    totalSeconds++;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}






function loadQuestion1() {
    if ((currentQuestion >= 0 && currentQuestion <= 9) || currentQuestion === 15 || currentQuestion === 19) {
        let q1 = questions[currentQuestion];
        questionEl1.innerHTML = questions[currentQuestion].question;
        container1.style.display = 'block';
        container2.style.display = 'none';
        container3.style.display = 'none';
        opt1.textContent = q1.option1;
        opt2.textContent = q1.option2;
        opt3.textContent = q1.option3;
        opt4.textContent = q1.option4;
        let selectedOption = document.querySelector('input[type=radio]:checked');
        if (!selectedOption) {
            // alert('Please select your answer!');
            return;
        }
        let answer = selectedOption.value;
        if (questions[currentQuestion-1].answer === answer) {
            score += 5;
            console.log(score);
        }
        selectedOption.checked = false;

    }

    else {
        return "";
    }
}

function loadQuestion2() {
    if ((currentQuestion > 9 && currentQuestion < 13) || currentQuestion === 16 || currentQuestion === 17 || currentQuestion === 18) {
        let q2 = questions[currentQuestion];

        questionEl2.innerHTML = questions[currentQuestion].question;
        container1.style.display = 'none';
        container2.style.display = 'block';
        container3.style.display = 'none';

        opt5.textContent = q2.option5;
        opt6.textContent = q2.option6;
        opt7.textContent = q2.option7;
        opt8.textContent = q2.option8;
        opt9.textContent = q2.option9;


        let str = '';
        let checked = document.querySelectorAll("input[type='checkbox']:checked");
        for (let i = 0; i < checked.length; i++) {
            str += checked[i].value;
        }
        console.log(str);
        if (str === questions[currentQuestion - 1].answer) {
            console.log('apple')
            score = score + 5;
            console.log(score);
        }
        else console.log('orange');


        for (let i = 0; i < checked.length; i++) {
            checked[i].checked = false;
        }


//selectedOption.checked = false;
        //currentQuestion++;
    }
    else //alert('game over')
        return

}

function loadQuestion3() {
    if (currentQuestion >= 13 && currentQuestion < 15) {
        let q3 = questions[currentQuestion];
        questionEl3.innerHTML = questions[currentQuestion].question;
        container2.style.display = 'none';
        container1.style.display = 'none';
        container3.style.display = 'block';
        let x = document.getElementById('opt10').value;
       

        if (questions[currentQuestion-1].answer === x) {
            score += 5;
        }
        //selectedOption.checked = false;
        console.log(score);
        document.getElementById('opt10').value = "";


    }

    else {
        return "";
    }
}

function counter() {

    loadQuestion1();
    loadQuestion2();
    loadQuestion3();

    if(currentQuestion === 20) {
        stop_timer();
    }

    if (currentQuestion === 19) {
        nextButton.textContent = 'Finish';
    }
    if (currentQuestion === 20) {
        container1.style.display = 'none';
        container2.style.display = 'none';
        container3.style.display = 'none';
        resultCont.style.display = 'block';
        resultCont.textContent = 'Your Score: ' + score + "%";
        return;
    }

    currentQuestion++;
    console.log(currentQuestion);
}

counter();

start_timer();

