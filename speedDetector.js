let speed = 140;
let speedLimit = 70;
let kmPerDemeritPoint = 5;

function checkSpeed(speed) {
  if (speed <= speedLimit) {
    return 'ok';
  } else {
    let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints > 12) {
      return 'License suspended';
    } else {
      return demeritPoints;
    }
  }
}

console.log(checkSpeed(speed));