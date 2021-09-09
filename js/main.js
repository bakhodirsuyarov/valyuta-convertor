let elForm = document.querySelector('.js-form');
let elInput = document.querySelector('.js-input');
let elSelect = document.querySelector('.js-select');
let elOutput = document.querySelector('.js-output');

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault()

  let resault = Number(elInput.value) * Number(elSelect.value);

  elOutput.textContent = resault.toFixed(2);
});

elInput.addEventListener('keyup', function() {

  let resault = Number(elInput.value) * Number(elSelect.value);

  elOutput.textContent = resault.toFixed(2);
});