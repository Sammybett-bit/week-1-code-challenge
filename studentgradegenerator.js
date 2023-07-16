let studentMarks = 30;
function mymarks(studentMarks){
  if (studentMarks >= 80 && studentMarks <= 100) {
    console.log('You got A');
  }
  else if(studentMarks >= 70 && studentMarks <= 80){
    console.log('You got B');
  }
  else if(studentMarks >= 60 && studentMarks <= 70){
    console.log('You got C');
  }
  else if(studentMarks >= 50 && studentMarks <= 60){
    console.log('You got D')
  }
  else if(studentMarks >= 40 && studentMarks <= 50){
    console.log('You got E')
  }
  else {
    console.log('OUT OF RANGE')
  }
}

mymarks(studentMarks);
// console.log(studentmarks());