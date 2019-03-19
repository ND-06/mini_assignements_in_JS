// First Assignement 

/* Write a function that takes this object as the parameters and returns only string.
So your function should only return Avengers and Russo Brothers..*/


/* 4 Steps : 1) Need to check each value , so we need to loop objects values
2) Once inside the loop, we need to check if the value is a string
3) If there is a match, we have to find a way to store it
4) Finally, we have to combine all matches and display them into a comma separated sentence.*/


const movies = {
  name: 'Avengers',
  releaseYear: 2012,
  director: 'Russo Brothers',
  imdbRating: 8.1
};

function returnNameAndDirector (obj) {
  const valuesArr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      valuesArr.push(obj[key]);
    }    
  }
  return valuesArr.join(' ');
};

console.log(returnNameAndDirector(movies));

