//binarySearch

let array: Array<number> = [];

for (let i: number = 1; i <= 100; i++) {
    array.push(i);
}

console.log(array);

const binarySearch = (list, number) => {
    let max = list[list.length - 1];
    let min = list[0];
    let step = 0;

    if (number > max && number < min) {
        return console.log("Number is not in diapason");
    }

    while (max > min) {
        debugger
        step++;
        let mid: number = Math.floor((max + min) / 2);
        let guess:number = mid;

        if (guess === number) {
            console.log("Number is defined");
            console.log("Количество шагов " + step);
            return guess;
        }

        if (guess > number) {
            max = mid - 1;
            console.log("number is less");
        }

        if (guess < number) {
            min = mid + 1;
            console.log("number is bigger");
        }
    }
};

binarySearch(array, 52);

let steps:number = 0;

const stepsForBinary = n => {
    let num = n;
    while (num > 1) {
        steps++;
        num = num / 2;
    }
    console.log(`${steps} steps and ${steps / 30 / 1000} seconds for binary`);
    console.log(`${n / 1000} seconds for linear`);
    console.log(`${n / 1000 / 60} minutes for linear`);
    console.log(`${n / 1000 / 60 / 60} hours for linear`);
    console.log(`${n / 1000 / 60 / 60 / 24} days for linear`);
    {

    }
};

stepsForBinary(1000000000);

const count = n => {
    if (n <= 0) return 0;

    let curr:number = 0;
    let steps:number = 0;

    while (curr < n) {
        steps++;
        curr = 2 ** steps;   // = Math.pow(2, steps)
    }

    console.log(`${steps} steps and ${steps / 30 / 1000} seconds for binary`);
    console.log(`${n / 1000} seconds for linear`);
    console.log(`${n / 1000 / 60} minutes for linear`);
    console.log(`${n / 1000 / 60 / 60} hours for linear`);
    console.log(`${n / 1000 / 60 / 60 / 24} days for linear`);
};

count(1000000000);