import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('footerForm');

console.log(form);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('emailInput').value;

  console.log(email);

  if (!isValidEmail(email)) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid email address',
      position: 'topRight',
    });
    return;
  }

  axios
    .post(
      'https://energyflow.b.goit.study/api/subscription',
      { email: email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then(function (response) {
      console.log(response.data);
      iziToast.success({
        title: 'Success',
        message: 'Subscription created successfully!',
        position: 'topRight',
      });
      document.getElementById('emailInput').value = '';
    })
    .catch(function (error) {
      console.error('Error:', error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to create subscription',
        position: 'topRight',
      });
    });
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
