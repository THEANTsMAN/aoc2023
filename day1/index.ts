import fs from 'fs';
import { ReadLine, createInterface } from 'readline';

const fileName = "day1/test2.txt";

const readFile = async () => {
    const lines = fs.readFileSync(fileName).toString().split("\n");

    return lines;
}


const getDigit = (line: string) => {
    console.log(line)
    line = line.replaceAll(/one/gi, "1");
    line = line.replaceAll(/two/gi, "2");
    line = line.replaceAll(/three/gi, "3");
    line = line.replaceAll(/four/gi, "4");
    line = line.replaceAll(/five/gi, "5");
    line = line.replaceAll(/six/gi, "6");
    line = line.replaceAll(/seven/gi, "7");
    line = line.replaceAll(/eight/gi, "8");
    line = line.replaceAll(/nine/gi, "9");

    console.log(line);


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

    const digits = input.map(line => getDigit(line))

    console.log(digits);

    return digits.reduce((acc, val) => {
        console.log(val);
        return acc + parseInt(val)
    }, 0);
}

//56108
//56093