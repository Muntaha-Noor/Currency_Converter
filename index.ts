#! /usr/bin/env node

import inquirer from "inquirer";

const currency = {
  USD: 1,
  PKR: 280,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  CAD: 1.24,
  AUD: 1.29,
  JPY: 110.3,
  CNY: 6.44,
  CHF: 0.93,
};

const user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: [
      "USD",
      "PKR",
      "EUR",
      "GBP",
      "INR",
      "CAD",
      "AUD",
      "JPY",
      "CNY",
      "CHF",
    ],
  },
  {
    name: "to",
    message: "Enter To Currency",
    type: "list",
    choices: [
      "USD",
      "PKR",
      "EUR",
      "GBP",
      "INR",
      "CAD",
      "AUD",
      "JPY",
      "CNY",
      "CHF",
    ],
  },
  {
    name: "amount",
    message: "Enter your amount",
    type: "number",
  },
]);

let fromAmount = currency[user_answer.from];
let toAmaount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmaount;
console.log(convertedAmount.toFixed(2));
