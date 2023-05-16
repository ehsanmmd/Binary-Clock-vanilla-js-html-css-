function dec2bin(dec) {
  return (dec >>> 0).toString(2).padStart(4, '0');
}

function updateSegment(segment, value) {
  let binary;
  binary = dec2bin(value % 10);
  for (i in binary) {
    binary[i] === '1'
      ? segment.children[1].children[3 - i].classList.add('colored')
      : segment.children[1].children[3 - i].classList.remove('colored');
  }
  binary = dec2bin(value / 10);
  for (let i = segment.className === 'segment1' ? 2 : 1; i < 4; i++) {
    binary[i] === '1'
      ? segment.children[0].children[3 - i].classList.add('colored')
      : segment.children[0].children[3 - i].classList.remove('colored');
  }
}

function startClock() {
  const hourSegment = document.querySelector('.segment1');
  const minuteSegment = document.querySelector('.segment2');
  const secondSegment = document.querySelector('.segment3');

  function update() {
    const currentDate = new Date();

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    updateSegment(hourSegment, hour);
    updateSegment(minuteSegment, minute);
    updateSegment(secondSegment, second);
  }

  update();
  setInterval(update, 1000);
}

startClock();
