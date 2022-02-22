import {
  DateTime,
} from '../luxon/src/luxon.js';

import {
  timeBox,
} from '../selector/selectors.js';

export const time = () => {
  const date = DateTime.now();
  const locale = navigator.language;
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: 'false',
  };
  timeBox.textContent = `${date.setLocale(locale).toLocaleString(options)}`;
};