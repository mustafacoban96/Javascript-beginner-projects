const questions = [
    {
        question: "When was Atatürk born?",
        answers:[
            {text: "1883" ,correct: false},
            {text: "1882" ,correct: false},
            {text: "1885" ,correct: false},
            {text: "1881" ,correct: true}
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers:[
            {text: "Asia" ,correct: false},
            {text: "Australia" ,correct: true},
            {text: "Arctic" ,correct: false},
            {text: "Africa" ,correct: false}
        ]
    },
    {
        question: "Who played Micheal Corleone in The Godfather?",
        answers:[
            {text: "Robert De Niro" ,correct: false},
            {text: "Al Pacino" ,correct: true},
            {text: "Rame Malik" ,correct: false},
            {text: "Marlon Brando" ,correct: false}
        ]
    },
    {
        question: "What is nationality of Jackie Chan",
        answers:[
            {text: "South Korea" ,correct: false},
            {text: "North Korea" ,correct: false},
            {text: "Japan" ,correct: false},
            {text: "China" ,correct: true}
        ]
    }
    
]; 

const question = document.querySelector('.question');
const choice = document.getElementById('answer-lists');
const nextButton = document.querySelector('.btn');




function questionDisplay(number){
  // Create and append new choices
  if(number <= questions.length-1){
    question.innerHTML = `${number + 1}. ` + questions[number].question;
    // Clear previous choices
    choice.innerHTML = '';
    for (let j = 0; j < questions[number].answers.length; j++) {
        let newLi = document.createElement("li");
        newLi.classList.add('choices' + `${questions[number].answers[j].correct}`);
        newLi.setAttribute('id','opt' +`${j}`)
        let newContent = document.createTextNode(questions[number].answers[j].text);
        newLi.appendChild(newContent);
        choice.appendChild(newLi);
      }
  }
  else{
        question.innerHTML = "You finished the quiz.. your score: " +`${score}`
        nextButton.style.display = 'none';
        choice.innerHTML = '';
  }
}
let currentQuestion = 0;
nextButton.addEventListener('click', function(){
    questionDisplay(currentQuestion);
    currentQuestion++;
    
    nextButton.style.display = 'none'
})


let score = 0;
    
    document.addEventListener('click', function(e){
        if(e.target.classList == 'choicesfalse'){
            // selected false option
            document.querySelector(`#${e.target.id}`).style.backgroundColor = '#fff';
            document.querySelector(`#${e.target.id}`).style.borderColor = '#ED2939';
            document.querySelector(`#${e.target.id}`).style.color = '#ED2939';
            //true option
            document.querySelector(".choicestrue").style.backgroundColor = '#fff';
            document.querySelector(".choicestrue").style.borderColor = '#018749';
            document.querySelector(".choicestrue").style.color = '#018749';
            document.querySelector(".choicestrue").style.cursor = 'not-allowed';
            for(let i = 0; i<document.getElementsByTagName('li').length;i++){
                if(document.getElementsByTagName('li')[i].classList.contains('choicesfalse')){
                    document.getElementsByTagName('li')[i].classList.remove('choicesfalse');
                    document.getElementsByTagName('li')[i].classList.add('disabled');
                }   
            }
            nextButton.style.display = 'block'
        }
        else if(e.target.classList == 'choicestrue'){
            document.querySelector(`#${e.target.id}`).style.backgroundColor = '#fff';
            document.querySelector(`#${e.target.id}`).style.borderColor = '#018749';
            document.querySelector(`#${e.target.id}`).style.color = '#018749';
            document.querySelector(".choicestrue").style.cursor = 'not-allowed';
            for(let i = 0; i<document.getElementsByTagName('li').length;i++){
                if(document.getElementsByTagName('li')[i].classList.contains('choicesfalse')){
                    document.getElementsByTagName('li')[i].classList.remove('choicesfalse');
                    document.getElementsByTagName('li')[i].classList.add('disabled');
                }
            }
            score++;
            nextButton.style.display = 'block'
        }

       
    });














