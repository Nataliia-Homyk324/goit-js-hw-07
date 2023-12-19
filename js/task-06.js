function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = parseInt(input.value);
  if (validateInput(amount)) {
    boxesDiv.textContent = '';
    let boxesMarkup = '';
    for (let i = 0; i < amount; i++) {
      const size = 30 + i * 10;
      const boxMarkup = `
        <div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>
      `;
      boxesMarkup += boxMarkup;
    }
    boxesDiv.insertAdjacentHTML('beforeend', boxesMarkup);
    input.value = '';
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

function validateInput(amount) {
  return amount >= 1 && amount <= 100;
}

