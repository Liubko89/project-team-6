// document.getElementById('submitButton').addEventListener('click', function () {
//   var email = document.getElementById('emailInput').value;
//   axios
//     .post(
//       'https://energyflow.b.goit.study/api/subscription',
//       { email: email },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     )
//     .then(function (response) {
//       console.log(response.data);
//       iziToast.success({
//         title: 'Success',
//         message: 'Subscription created successfully!',
//         position: 'topRight',
//       });
//       emailInput.value = '';
//     })
//     .catch(function (error) {
//       console.error('Error:', error);
//       iziToast.error({
//         title: 'Error',
//         message: 'Failed to create subscription',
//         position: 'topRight',
//       });
//     });
// });
