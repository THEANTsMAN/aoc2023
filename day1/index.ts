import fs from 'fs';
import { ReadLine, createInterface } from 'readline';

const fileName = "day1/input2.txt";
// const fileName = "day1/test2.txt";

const readFile = async () => {
    const lines = fs.readFileSync(fileName).toString().split("\n");

    return lines;
}

const getDigit = (line: string) => {
    console.log(line)
  
    const firstDigit = line.match(/^[^\d]*(\d)/)![1];
    console.log("First Digit " + firstDigit);
    const lastDigit = line.match(/.*(\d)/)![1];
    console.log("Last Digit " + lastDigit);

    if (firstDigit.length > 1 || lastDigit.length > 1) {
        console.log("Too many" + line);
    }

    return firstDigit.concat(lastDigit);
};


export const part1 = async () => {
    const input =  await readFile();
    // console.log(input);

    return input.reduce((acc, val) => {
        console.log(val);
        return acc + parseInt(getDigit(val))
    }, 0);
}

const convertDigits: any = {
  "one": "1",
  "two": "2",
  "three": "3",
  "four": "4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine": "9",
}

const convert = (value: string) => {
  if (value.length > 1) {
    return convertDigits[value];
  }

  return value;
} 

const digits = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
]

const getDigit2 = (line: string) => {
  console.log(line)
  let firstDigit;
  let firstPos = line.length
  let lastDigit;
  let lastPos = 0

  for (let i in digits) {
    let val = line.indexOf(digits[i])
    let valP = line.lastIndexOf(digits[i])

    if (val >= 0) {
      if (val < firstPos) {
        firstDigit = convert((digits[i]))
        firstPos = line.indexOf(digits[i])
      }
    }

    if (valP >= 0) {
      if (valP >= lastPos) {
        lastDigit = convert(digits[i])
        lastPos = line.lastIndexOf(digits[i])
      }
    }
  }

  console.log("First Digit " + firstDigit);
  console.log("First Pos " + firstPos);
  console.log("Last Digit " + lastDigit);
  console.log("Last Pos " + lastPos);

  return firstDigit.concat(lastDigit);
};

export const part2 = async () => {
  const input =  await readFile();
  // console.log(input);

  const digits = input.map(line => getDigit2(line))
  
  console.log(digits);

  return digits.reduce((acc, val) => {
      // console.log(val);
      return acc + parseInt(val)
  }, 0);
}