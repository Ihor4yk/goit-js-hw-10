import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputTime = document.querySelector('#datetime-picker');
const startBtn = document.querySelector("[data-start]");
const showTime = document.querySelectorAll('.value');

let userSelectedDate;
let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    intervalId = userSelectedDate - new Date();
    if (intervalId < 1) {
      iziToast.error({
        color: 'red',
        position: 'topRight',
        message: `Please choose a date in the future`,
      });
    } else {
      startBtn.disabled = false;
      inputTime.disabled = true;
    }
  },
};
flatpickr(inputTime, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startBtn.disabled = true;
startBtn.addEventListener('click', () => {
  const repeatTime = setInterval(() => {
    intervalId = userSelectedDate - new Date();
    if (intervalId < 1) {
      startBtn.disabled = true;
      clearInterval(repeatTime);
      return;
    };
    const timer = convertMs(intervalId);
    showTime[0].innerText = timer.days.toString().padStart(2, '0');
    showTime[1].innerText = timer.hours.toString().padStart(2, '0');
    showTime[2].innerText = timer.minutes.toString().padStart(2, '0');
    showTime[3].innerText = timer.seconds.toString().padStart(2, '0');
  }, 1000);
});