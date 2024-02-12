import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('footerForm');


form.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('emailInput').value;


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
      iziToast.success({
        message: response.data.message,
        position: 'topCenter',
        messageColor: '#fff',
        backgroundColor: '#1b1b1b',
      });
      document.getElementById('emailInput').value = '';
    })
    .catch(function (error) {
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
