const goToTop = () => window.scrollTo(0, 0);
const toggle = ele => (ele.style.display = (ele.style.display === 'none') ? 'block' : 'none');

const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));

// Example
diffDays(new Date('2014-12-19'), new Date('2020-01-01'));   // 1839

// `date` is a Date object
const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));

// Example
dayOfYear(new Date(2020, 04, 16));      // 137

// `date` is a `Date` object
const extract = date => date.toISOString().split(/[^0-9]/).slice(0, -1);

// `extract` is an array of [year, month, day, hour, minute, second, millisecond]