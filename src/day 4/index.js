function generateUniquePhoneNumbers(count) {
  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < count) {
    const phoneNumber = generatePhoneNumber();
    uniqueNumbers.add(phoneNumber);
  }

  return Array.from(uniqueNumbers);
}
function randomNum() {
  return Math.floor(Math.random() * 10);
}
function generatePhoneNumber() {
  const twoDigit = `${randomNum()}${randomNum()}`;
  const threeDigit = `${randomNum()}${randomNum()}${randomNum()}`;
  const twoDigit2 = `${randomNum()}${randomNum()}`;
  const twoDigit3 = `${randomNum()}${randomNum()}`;

  return `+998 ${twoDigit} ${threeDigit} ${twoDigit2} ${twoDigit3}`;
}

const uniquePhoneNumbers = generateUniquePhoneNumbers(500);
console.log(uniquePhoneNumbers);
var ownNum = prompt("Enter phone number:");
for (let i in uniquePhoneNumbers) {
  if (uniquePhoneNumbers[i] == ownNum) {
    console.log("there is a same number");
    secondTasks()
    break;
  }
}
function generateUniqueNumbers() {
  const generatedNumbers = new Set();
  while (generatedNumbers.size < 30) {
    const randomNumber = Math.floor(Math.random() * 301);
    generatedNumbers.add(randomNumber);
  }

  return Array.from(generatedNumbers);
}
function randomNum2() {
  return Math.floor(Math.random() * 30);
}
function checkUserWin(userNumbers, generatedNumbers) {
  return userNumbers.some((number) => generatedNumbers.includes(number));
}

function secondTasks() {
  const generatedNumbers = generateUniqueNumbers();
  var prompt1 = prompt("Enter any 6 numbers:").split(" ");
  console.log("Generated numbers: ", generatedNumbers);
  console.log(prompt1);
  if (
    prompt1[0] == generatedNumbers[randomNum2()] &&
    prompt1[1] == generatedNumbers[randomNum2()] &&
    prompt1[2] == generatedNumbers[randomNum2()] &&
    prompt1[3] == generatedNumbers[randomNum2()] &&
    prompt1[4] == generatedNumbers[randomNum2()] &&
    prompt1[5] == generatedNumbers[randomNum2()]
  ) {
    console.log("Congratulations! You win!");
  }
}
