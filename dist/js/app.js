function hours() {
  let hour = 0;
  for (let i = 0; i < 24; i++) {
    hour += 1;
    console.log(`${hour}:`);
  }
}

function minutes() {
  let minute = 0;
  for (let j = 0; j < 12; j++) {
    minute += 5;
    console.log(`${minute}`);
  }
}

console.log(`${hours()} ${minutes()}`);
