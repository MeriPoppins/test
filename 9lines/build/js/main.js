var arrow = document.querySelector('.user-js__arrow');
var level = document.querySelector('.user-js__level');
var inputs = document.querySelectorAll('.user-skills__input'),
    index, input;

var counterNumber = 0;
level.innerHTML = counterNumber + '%';

var counterDeg = 0;
arrow.style.transform = "rotate(" + counterDeg + "deg)";

for (index = 0; index < inputs.length; index++) {
    input = inputs[index];
    input.addEventListener('change', clickHandler);
};

function clickHandler(event) {
    event.preventDefault();
    if (this.checked){
      counterNumber = counterNumber + 8;
      counterDeg = counterDeg + 15;
    } else {
      counterNumber = counterNumber - 8;
      counterDeg = counterDeg - 15;
    }
  level.innerHTML = counterNumber + '%';
  arrow.style.transform = "rotate(" + counterDeg + "deg)";
};