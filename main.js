const $clickButtonList = document.querySelectorAll('.click-button');
const $closeButton = document.querySelector('.close-button');
const $form = document.querySelector('.form');

function handleSubmit(event) {
  event.preventDefault();
  if ($form.getAttribute('class') === 'submit') {
    const $time = $form.elements.time.value;
    const $date = $form.elements.date.value;
    console.log(event.target);
    console.log($time);
    console.log($date);
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
$form.addEventListener('click', handleSubmit);
