# goit-nodejs-hw-01

Скриншот виконання програми:

![Result](./assets/result-goit-nodejs-hw-01.jpg)

## Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list" або `yarn start -a list`

## Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id `05olLMgyVQdWRwgKfg5J6`

## Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email `mango@gmail.com` --phone `322-22-22`

## Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id `qdggE76Jtbfd9eWJHrssH`

## Program commands

```node.js
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
```
