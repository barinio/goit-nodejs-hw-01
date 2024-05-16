const readline = require("readline");
const { program } = require("commander");
require("colors");
program.parse(process.argv);

const { stdin, stdout } = process;
const rl = readline.createInterface({ input: stdin, output: stdout });

let count = 0;
const mind = Math.floor(Math.random() * 100) + 1;

const resultValid = (m) => {
  console.log(m);
  return false;
};

const isValid = (value) => {
  if (isNaN(value)) {
    resultValid("Введіть число!".red);
  }
  if (value < 1 || value > 100) {
    resultValid("Число повинно бути в діапазоні від 1 до 10".red);
  }
  return true;
};

const game = () => {
  rl.question("Введіть число від 1 до 10, щоб вгадати задумане: ".yellow, (value) => {
    let a = +value;
    if (!isValid(a)) return game();
    count += 1;
    if (a < mind) console.log(`Загадане число є більше за ${a}`);
    if (a > mind) console.log(`Загадане число є меншим за ${a}`);
    if (a === mind) {
      console.log("Вітаю, Ви вгадали число за %d крок(ів)".green, count);
      rl.close();
      return;
    }
    console.log("Ви не вгадали, ще спроба".red);
    game();
  });
};

game();
