var time_id = document.getElementById('time');
var secounds = 3000;
t_int = setInterval(timer,1000);
function timer(){
  if(secounds <=0){
    alert("your time is finished");
    time.id.innerHTML == "sure: doldu";
  }
  else {
    var m = Math.floor(secounds/60);
    var s = secounds%60;
    if(m<10){
      m = "0" + m;
    }
    if(s<10){
      s = '0'+s;
    }
    time_id.innerHTML = "sure: " + m + ":" + s;
    secounds --;
  }
}
const quizData = [
    {
        question:"the sum of these numbers 3+7 is.",
        a: 37,
        b: 73,
        c: 21,
        d: 10,

        correct: "d",
    },
    {
        question: "product of these numbers 3x7 is ",
        a: 21,
        b: 73,
        c: 21,
        d: 10,
        correct: "a",
    },
    {
        question: "subtraction of these numbers 7-3 is",
        a: 3,
        b: -4,
        c: 10,
        d: 4,
        correct: "d",
    },
    {
        question: "additin of these numbers 90+10 is",
        a: 9010,
        b: 80,
        c: 100,
        d: 90+10,
        correct: "c",
    },
      {
        question: "additin of these numbers 15+15 is",
        a: 1515,
        b: 30,
        c: 0,
        d: 31,
        correct: "b",
    },
        {
        question: "what is the result of these numbers 81/9 ",
        a: 8,
        b: 7,
        c: 8.6,
        d: 9,
        correct: "d",
    },
    {
          question: "what is the result of these numbers √81",
          a: 8.9,
          b: 9,
          c: 8.6,
          d: 9.5,
        correct: "b",
    },
    {

          question: "what is the result of these numbers √49 ",
          a: 8.9,
          b: 7,
          c: 8.6,
          d: 9.5,
        correct: "b",
    },



];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    // answerEls.forEach(answerEl => answerEl.checked = false);
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
