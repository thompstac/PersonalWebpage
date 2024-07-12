const jeopardyBoard = document.getElementById('jeopardy-board');
const modal = document.createElement('div');
const modalContent = document.createElement('div');
const closeModal = document.createElement('span');

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
const questions = [
  ['Question 1-100', 'Question 1-200', 'Question 1-300', 'Question 1-400', 'Question 1-500'],
  ['Question 2-100', 'Question 2-200', 'Question 2-300', 'Question 2-400', 'Question 2-500'],
  ['Question 3-100', 'Question 3-200', 'Question 3-300', 'Question 3-400', 'Question 3-500'],
  ['Question 4-100', 'Question 4-200', 'Question 4-300', 'Question 4-400', 'Question 4-500'],
  ['Question 5-100', 'Question 5-200', 'Question 5-300', 'Question 5-400', 'Question 5-500']
];

const answers = [
  ['Answer 1-100', 'Answer 1-200', 'Answer 1-300', 'Answer 1-400', 'Answer 1-500'],
  ['Answer 2-100', 'Answer 2-200', 'Answer 2-300', 'Answer 2-400', 'Answer 2-500'],
  ['Answer 3-100', 'Answer 3-200', 'Answer 3-300', 'Answer 3-400', 'Answer 3-500'],
  ['Answer 4-100', 'Answer 4-200', 'Answer 4-300', 'Answer 4-400', 'Answer 4-500'],
  ['Answer 5-100', 'Answer 5-200', 'Answer 5-300', 'Answer 5-400', 'Answer 5-500']
];

modal.id = 'question-modal';
modalContent.id = 'modal-content';
closeModal.id = 'close-modal';
closeModal.innerHTML = '&times;';
modalContent.appendChild(closeModal);
modal.appendChild(modalContent);
document.body.appendChild(modal);

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  modalContent.innerHTML = '';
  modalContent.appendChild(closeModal);
});

function createJeopardyCell(text, question, answer, isClickable) {
  const cell = document.createElement('div');
  cell.classList.add('jeopardy-cell');
  if (!isClickable) {
    cell.classList.add('header-cell');
  }
  cell.innerText = text;
  if (isClickable) {
    cell.addEventListener('click', () => showQuestion(question, answer));
  }
  return cell;
}

function showQuestion(question, answer) {
  modal.style.display = 'block';
  const questionText = document.createElement('div');
  questionText.classList.add('question');
  questionText.innerText = question;

  const answerButton = document.createElement('button');
  answerButton.innerText = 'Show Answer';
  answerButton.addEventListener('click', () => {
    answerText.style.display = 'block';
    answerButton.style.display = 'none';
  });

  const answerText = document.createElement('div');
  answerText.classList.add('answer');
  answerText.innerText = answer;
  answerText.style.display = 'none';

  modalContent.appendChild(questionText);
  modalContent.appendChild(answerButton);
  modalContent.appendChild(answerText);
}

// Create headers
categories.forEach(category => {
  jeopardyBoard.appendChild(createJeopardyCell(category, '', '', false));
});

// Create question cells
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < categories.length; j++) {
    const question = questions[j][i];
    const answer = answers[j][i];
    const points = (i + 1) * 100;
    jeopardyBoard.appendChild(createJeopardyCell(points, question, answer, true));
  }
}
