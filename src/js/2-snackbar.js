import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  const delay = formData.get('delay');
  const state = formData.get('state');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: '',
        icon: false,
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        timeout: 5000,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: '',
        icon: false,
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        timeout: 5000,
      });
    });
});
