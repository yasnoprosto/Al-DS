//binarySearch

let array = [];

for(let i = 1; i <= 100; i++) {
  array.push(i);
}

console.log(array);

function binarySearch(list, number) {
  let max = list[list.length - 1];
  let min = list[0];
  let step = 0;

  if (number > max && number < min) {
    return console.log("Number is not in diapason");
  }

  while (max > min) {
    debugger
    step++;
    let mid = Math.floor((max + min) / 2);
    let guess = mid;

    if (guess === number) {
      console.log("Number is defined")
      console.log("Количество шагов " + step);
      return guess;
    }

    if (guess > number) {
      max = mid - 1;
      console.log("number is less")
    }
    
    if (guess < number) {
      min = mid + 1;
      console.log("number is bigger")
    }
  }
}

binarySearch(array, 52);
