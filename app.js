import { countAsYes, percentScore } from './utils.js'

// import functions and grab DOM elements
const button = document.querySelector('button');
const result = document.getElementById('result');

// initialize state
button.addEventListener('click', () => {
  confirm('are you sure you want to take the quiz?');

  const question1 = prompt('Do I like coffee?');
  if (!question1) return;

  const question2 = prompt('Do I like soda?');
  if (!question2) return;

  const question3 = prompt('Do I like water?');
  if (!question3) return;

  // Set score 
  let score = 0;

  if (countAsYes(question1)) score++;
  if (!countAsYes(question2)) score++;
  if (countAsYes(question3)) score++;

  alert('The quiz has ended. Will display results below. :)')

  const percentCorrect = percentScore(score);
  const displayScore = result.textContent = `You answered ${score} question(s) correctly! Percent correct: ${percentCorrect}`;
  
  if (score === 1) return result.classList.add("results-1") && displayScore;
  if (score === 2) return result.classList.add("results-2") && displayScore;
  if (score === 3) return result.classList.add("results-3") && displayScore;

});
