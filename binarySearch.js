//binarySearch

function binarySearch(list, number) {

  
  let max = list[list.length - 1];
  let min = list[0];
  let step = 0;

  if(number > max || number < min) {
    return console.log("Number is not from the range");
  }
  

  while(min <= max) {
    let mid = Math.floor((min + max) / 2);
    let guess = mid;
    console.log("This is guess - " + guess);
    
    
    if(guess === number) {
      console.log('Founded in ' + step + ' steps')
      return number;
    }
    if(guess < number) {
      min = mid + 1
      console.log('I was here')
    }
    if(guess > number) {
      max = mid - 1
      console.log('And I was here')
    }
    step++;
  }
  return null;
}

console.log(1)

const list = [];

for (let i = 1; i <= 100; i++) {
  list.push(i);
}

console.log(list);

binarySearch(list, 2);
