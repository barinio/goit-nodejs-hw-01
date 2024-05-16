const readline = require("readline");
require("colors");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const test = () => {
  const qust = "Твоє ім'я: ";
  rl.question(qust.magenta, (name) => {
    console.log(`Welcome ${name}!!!`.bgGreen.red);
    rl.close();
  });
};

test();
