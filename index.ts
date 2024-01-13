import minimist from 'minimist';
import { part1 } from "./day1/index"

const getArgs = async () => {
    const args = minimist(process.argv.slice(2));

    // console.log(args);
}

const run = async () => {
    console.log("Running");
    getArgs();

    const result = await part1();

    console.log(result)
  };
  
run();