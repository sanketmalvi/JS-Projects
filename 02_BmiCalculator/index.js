const form = document.querySelector('form');
const comment = document.querySelector('#comment');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const Bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${Bmi}</span>`;

    if (weight < 18.6) comment.innerHTML = 'You are UnderWeight';

    if (weight >= 18.6 || weight <= 24.9) comment.innerHTML = 'You are Fit';

    if (weight > 24.9) comment.innerHTML = 'You are OverWeight';
  }
});
