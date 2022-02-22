import UpdateDisplay from './modules/main/main.js';
import * as selectors from './modules/selector/selectors.js';
import { time } from './modules/time/time.js';

selectors.listBtn.forEach((btn, i) => {
  btn.onclick = () => {
    selectors.addActive.forEach((sec, index) => {
      if (i === index) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });
  };
});

setInterval(time, 1000);
UpdateDisplay.updateUi();
UpdateDisplay.formBtn.addEventListener('click', UpdateDisplay.addBooks);
