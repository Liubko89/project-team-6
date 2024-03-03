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
      '/subscription',
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
        backgroundColor: '#eea10c',
      });
      document.getElementById('emailInput').value = '';
    })
    .catch(function (error) {
      iziToast.success({
        message: 'This email address has already subscribed',
        position: 'topRight',
        messageColor: '#fff',
        backgroundColor: '#eea10c',
      });
    });
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
