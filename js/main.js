let elForm = document.querySelector('.js-form');
let elInput = document.querySelector('.js-input');
let elSelect = document.querySelector('.js-select');
let elOutput = document.querySelector('.js-output');
let elInputSum = document.querySelector('.js-input__sum');
let elSelectSum = document.querySelector('.js-select__sum');
let elOutputSum = document.querySelector('.js-output__sum');

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault()
  let resault = Number(elInput.value) * Number(elSelect.value);
  elOutput.textContent = resault.toFixed(2);
});

elInput.addEventListener('keyup', function() {
  let resault = Number(elInput.value) * Number(elSelect.value);
  elOutput.textContent = resault.toFixed(2);
});


elForm.addEventListener('submit', function(evt){
  evt.preventDefault()
  let natija = Number(elInputSum.value) / Number(elSelectSum.value);
  elOutputSum.textContent = natija.toFixed(2);
});

elInputSum.addEventListener('keyup', function(){
  let natija = Number(elInputSum.value) / Number(elSelectSum.value);
  elOutputSum.textContent = natija.toFixed(2);
})