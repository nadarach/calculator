let calculation = JSON.parse(localStorage.getItem('calculation')) || '';    

console.log(calculation);

function displayResult(){
  document.querySelector('.js-calculation').innerText = String(calculation);
}

function clearCalculation(){
  calculation = '';
  localStorage.removeItem('calculation');
  displayResult();
  
  console.log('Cleared.');
}

function updateCalculation(value){
  calculation += value;

  localStorage.setItem('calculation', JSON.stringify(calculation));

  displayResult();
}
