const $clickButtonList = document.querySelectorAll('.click-button');
const $closeButton = document.querySelector('.close-button');

const $form = document.querySelector('form');

const $timeInput = document.querySelector('#time');
const $dateInput = document.querySelector('#date');
console.log($dateInput);

function handleSubmit(event) {
  if (event.target.getAttribute('class') === 'submit') {
    // const $time = $form.elements.time.value;
    // const $date = $form.elements.date.value;
    console.log(event.target);
  }
}

$form.addEventListener('click', handleSubmit);

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
