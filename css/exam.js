var time_id = document.getElementById('time');
var secounds = 30;
t_int = setInterval(timer,1000);
function timer(){
  if(secounds <=0){
    alert("your time is finished",quiz.innerHTML = ` <h2 style ="color: green";>${quizData.length} sorudan ${score} soruya cevap veridiniz</h2>`);
     loadQuiz();
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
        question:"Acording to Simple Present Tense Formula, I _______ the sum.",
        a: "solve",
        b: " solves",
        c: "had solved",
        d: " solved",

        correct: "d",
    },

    {
        question: "We sometimes",
        a: "read",
        b: "reads",
        c: "reading",
        d: "none of this",
        correct: "d",
    },
    {
        question: "i haven't________my seatbelt yet",
        a: "dressed",
        b: "tied",
        c: "locked",
        d: "fastened",
        correct: "d",
    },
    {
        question: "You're_______to  make me cry",
        a: "thinking",
        b: "round",
        c: "about",
        d: "planned",
        correct: "d",
    },
      {
        question: "Will you______it for me?",
        a: "give it",
        b: "handle",
        c: "take care",
        d: "go",
        correct: "b",
    },
        {
        question: "You cought me_____surprise last night. ",
        a: "on",
        b: "with",
        c: "for",
        d: "by",
        correct: "d",
    },
    {
          question: "There_____plenty of fish in the sea. ",
        a: "is",
        b: "are",
        c: "be",
        d: "was",
        correct: "d",
    },
    {

          question: "I think they_____enjoyed the movie. ",
        a: "rarely",
        b: "thoroughly",
        c: "very",
        d: "real",
        correct: "d",
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


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    // deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
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
           <button style="font-family: sans-serif;  font-size: 20px;  background-color: #ffc300;
             color: #fff;
             border: 0px;
             border-radius: 3px;
             padding: 20px;
             cursor: pointer;
             margin-top: 10px;
             color:#123456;
             margin-bottom: 20px;"; onclick="location.reload()">Reload</button>
           `
       }
    }
})
