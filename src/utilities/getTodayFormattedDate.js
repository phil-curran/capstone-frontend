export default function getTodayFormattedDate() {
  let months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let longMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let year = now.getFullYear();
  let month = months[now.getMonth()];
  let date = now.getDate();
  let day = days[now.getDay()];
  let longMonth = longMonths[months.indexOf(month)];

  // Adding suffix to date
  let suffix = "";
  if (date === 1 || date === 21 || date === 31) {
    suffix = "st";
  } else if (date === 2 || date === 22) {
    suffix = "nd";
  } else if (date === 3 || date === 23) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  let formattedDateString = `${day}, ${longMonth} ${date}${suffix}, ${year}`;
  let entryDateString = `${date}${month}${year}`;
  return { formattedDateString, entryDateString };
}
