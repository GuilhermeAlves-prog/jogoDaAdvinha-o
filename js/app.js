const Root = document.getElementById('root');
let RandomNumber = Math.round(Math.random() * 10)
let attempts = 0

const quizCardtry = `
  <div class="quiz">
    <h1>Jogo da Adivinhação</h1>
    <p>Adivinhe o número entre 0 e 10</p>

    <form>
      <input type="number" id="userValue" min="0" max="10">
      <button onclick="verifyNumber(event)">Tentar</button>    
    </form>
  <div/>`

const quizSucess =`
<div class="quiz quizsucess">
  <h1></h1>
  <button onclick="resetQuiz()">Jogar novamente</button>
<div/>`


function render(template) {
  Root.innerHTML = template;
}

render(quizCardtry)

function verifyNumber(event) {
  event.preventDefault();
  attempts+= 1
  let userValue = document.getElementById('userValue').value;

  if(userValue == RandomNumber) {
    render(quizSucess)
    const quizSucessh1 = document.querySelector('.quizsucess h1')
    let attemptsPhrase = attempts > 1 ? 'tentativas' : 'tentativa'
    quizSucessh1.innerHTML = `Acertou em ${attempts} ${attemptsPhrase}!`
  }
  userValue = document.getElementById('userValue').value = '';
}

function resetQuiz() {
  render(quizCardtry)
  attempts = 0
  RandomNumber = Math.round(Math.random() * 10)
}
