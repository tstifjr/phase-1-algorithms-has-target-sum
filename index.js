function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length-1; i++){
    for (let j = i+1; j < array.length; j++){
     if(array[i] + array[j] === target){
      return true;
     }
    }
  } 
  return false;
}

/* 
  Write the Big O time complexity of your function here
  n^2 complexity
*/

/* 
  Add your pseudocode here
  select n
  loop through n+1 till n == arraylength, 
  adding n to each and comparing to sum value
*/

/*
  Add written explanation of your solution here
  compare adding every two integers in array to desired sum value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
