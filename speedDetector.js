let speed = 180; // The driver's speed
let speedLimit = 70; // The speed limit
let kmPerDemeritPoint = 5; // The rate at which demerit points are assigned per km/h over the speed limit

function checkSpeed(speed) {
  if (speed <= speedLimit) {
    return 'ok'; // If the speed is less than or equal to the speed limit, return 'ok'
  } else {
    let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    // Calculate the demerit points by subtracting the speed limit from the speed and dividing by kmPerDemeritPoint
    // Math.floor() rounds down the result to the nearest whole number

    if (demeritPoints > 12) {
      return 'License suspended'; // If the demerit points exceed 12, return 'License suspended'
    } else {
      return demeritPoints; // Otherwise, return the calculated demerit points
    }
  }
}

console.log(checkSpeed(speed)); // Call the function and output the result
