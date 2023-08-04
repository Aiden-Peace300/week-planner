const $clickButtonList = document.querySelectorAll('.click-button');
const $closeButton = document.querySelector('.close-button');
const $timeInput = document.querySelector('#time');
const $dateInput = document.querySelector('#date');

function clickButton() {
  popup.style.display = 'block';
}

for (let i = 0; i < $clickButtonList.length; i++) {
  $clickButtonList[i].addEventListener('click', clickButton);
}

// when you click a day

const popup = document.querySelector('.popup');

function closeButton() {
  popup.style.display = 'none';
}

$closeButton.addEventListener('click', closeButton);
