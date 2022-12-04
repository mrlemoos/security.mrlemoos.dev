import { blue, yellow, red, cyan } from "colors";

const Channel = {
  log: (message: string) => {
    console.log(`${blue.bold("LOG")} ${message}`);
  },
  warn: (message: string) => {
    console.log(`${yellow.bold("WARNING")} ${message}`);
  },
  error: (message: string) => {
    console.log(`${red.bold("ERROR")} ${message}`);
  },
  info: (message: string) => {
    console.log(`${cyan.bold("INFO")} ${message}`);
  },
};

export default Channel;
