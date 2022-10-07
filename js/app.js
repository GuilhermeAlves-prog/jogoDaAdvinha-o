const Root = document.getElementById('root');
let RandomNumber = Math.round(Math.random() * 10)
let attempts = 0

const quizCardtry = `
  <div class="quiz">
    <h1>Jogo da Adivinhação</h1>
    <p>Adivinhe o número entre 0 e 10</p>

    <form>
      <input type="number" id="userValue" min="0" max="10" autofocus>
      <button onclick="verifyNumber(event)">Tentar</button>    
    </form>
  <div/>`

const quizSucess =`
<div class="quiz quizsucess">
  <h1></h1>
  <button onclick="resetQuiz()">Jogar novamente</button>
<div/>`


function Render(template) {
  Root.innerHTML = template;
}

Render(quizCardtry)

function verifyNumber(event) {
  event.preventDefault();
  attempts+= 1

  const userInput = document.getElementById('userValue')
  let userValue = Number(userInput.value);

  let userValueEqualRandomNumber = userValue === RandomNumber 

  if(userValueEqualRandomNumber) {
    Render(quizSucess)
    const quizSucessh1 = document.querySelector('.quizsucess h1')
    let attemptsPhrase = attempts > 1 ? 'tentativas' : 'tentativa'
    quizSucessh1.innerHTML = `Acertou em ${attempts} ${attemptsPhrase}!`
  }
  userInput.value = '';
  userInput.focus()
}

function resetQuiz() {
  Render(quizCardtry)
  attempts = 0
  RandomNumber = Math.round(Math.random() * 10)
}
