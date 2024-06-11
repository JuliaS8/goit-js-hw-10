// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const refs = {
//   startBtn: document.querySelector('[data-start]'),
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };

// let userSelectedDate;
// let intervalId;

// if (refs.startBtn) {
//   refs.startBtn.disabled = true;

//   refs.startBtn.addEventListener('click', () => {
//     intervalId = setInterval(updateClockface, 1000);
//     refs.startBtn.disabled = true;
//     document.querySelector('#datetime-picker').disabled = true;
//   });
// } else {
//   console.error('Start button not found');
// }

// function updateClockface() {
//   const now = new Date();
//   const timeDifference = userSelectedDate - now;

//   if (timeDifference <= 0) {
//     clearInterval(intervalId);
//     displayTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//     document.querySelector('#datetime-picker').disabled = false;
//     return;
//   }

//   const time = convertMs(timeDifference);
//   displayTime(time);
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function displayTime({ days, hours, minutes, seconds }) {
//   refs.days.textContent = String(days).padStart(2, '0');
//   refs.hours.textContent = String(hours).padStart(2, '0');
//   refs.minutes.textContent = String(minutes).padStart(2, '0');
//   refs.seconds.textContent = String(seconds).padStart(2, '0');
// }

// flatpickr('#datetime-picker', {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const now = new Date();
//     if (selectedDates[0] <= now) {
//       showErrorMessage('Please choose a date in the future');
//       refs.startBtn.disabled = true;
//     } else {
//       iziToast.hide({}, document.querySelector('.iziToast'));
//       refs.startBtn.disabled = false;
//       userSelectedDate = selectedDates[0];
//     }
//   },
// });

// async function showErrorMessage(message) {
//   try {
//     const svgIcon = await loadSvgIcon('./img/icon-error.svg');
//     const errorHtml = `
//       <div style="display: flex; align-items: center; color: white;">
//         <div style="margin-right: 10px; width: 24px; height: 24px;">
//           ${svgIcon}
//         </div>
//         <span style="font-weight: bold; margin-right: 10px;"></span>
//         <span>${message}</span>
//       </div>
//     `;
//     iziToast.error({
//       title: '',
//       message: errorHtml,
//       position: 'topRight',
//       timeout: 5000,
//       titleColor: 'white',
//       messageColor: 'white',
//       backgroundColor: '#EF4040',
//       icon: false,
//       theme: 'dark',
//     });
//   } catch (error) {
//     console.error('Error loading SVG icon:', error);
//   }
// }

// async function loadSvgIcon(path) {
//   const response = await fetch(path);
//   if (!response.ok) {
//     throw new Error(`Failed to load SVG icon: ${response.statusText}`);
//   }
//   return await response.text();
// }

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let userSelectedDate;
let intervalId;

if (refs.startBtn) {
  refs.startBtn.disabled = true;

  refs.startBtn.addEventListener('click', () => {
    intervalId = setInterval(updateClockface, 1000);
    refs.startBtn.disabled = true;
    document.querySelector('#datetime-picker').disabled = true;
  });
} else {
  console.error('Start button not found');
}

function updateClockface() {
  const now = new Date();
  const timeDifference = userSelectedDate - now;

  if (timeDifference <= 0) {
    clearInterval(intervalId);
    displayTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    document.querySelector('#datetime-picker').disabled = false;
    return;
  }

  const time = convertMs(timeDifference);
  displayTime(time);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function displayTime({ days, hours, minutes, seconds }) {
  refs.days.textContent = String(days).padStart(2, '0');
  refs.hours.textContent = String(hours).padStart(2, '0');
  refs.minutes.textContent = String(minutes).padStart(2, '0');
  refs.seconds.textContent = String(seconds).padStart(2, '0');
}

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const now = new Date();
    if (selectedDates[0] <= now) {
      showErrorMessage('Please choose a date in the future');
      refs.startBtn.disabled = true;
    } else {
      const iziToastElement = document.querySelector('.iziToast');
      if (iziToastElement) {
        iziToast.hide({}, iziToastElement);
      }
      refs.startBtn.disabled = false;
      userSelectedDate = selectedDates[0];
    }
  },
});

async function showErrorMessage(message) {
  try {
    const svgIcon = await loadSvgIcon('./img/icon-error.svg');
    const errorHtml = `
      <div style="display: flex; align-items: center; color: white;">
        <div style="margin-right: 10px; width: 24px; height: 24px;">
          ${svgIcon}
        </div>
        <span style="font-weight: bold; margin-right: 10px;"></span>
        <span>${message}</span>
      </div>
    `;
    iziToast.error({
      title: '',
      message: errorHtml,
      position: 'topRight',
      timeout: 5000,
      titleColor: 'white',
      messageColor: 'white',
      backgroundColor: '#EF4040',
      icon: false,
      theme: 'dark',
    });
  } catch (error) {
    console.error('Error loading SVG icon:', error);
  }
}

async function loadSvgIcon(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load SVG icon: ${response.statusText}`);
  }
  return await response.text();
}
