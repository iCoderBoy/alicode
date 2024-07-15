var array = [];
array = prompt("Enter a string:").split(",");
var method = prompt(
  "Enter a sort type with comma like ([a-z],[0-9] or [z-a],[9-0]):"
);
var str = [];
var number = [];

for (var i = 0; i < array.length; i++) {
  if (isNaN(array[i])) {
    str.push(array[i]);
  } else {
    number.push(array[i]);
  }
}

var result;

switch (method) {
  case "[a-z],[0-9]":
    result = str.sort().concat(
      number.sort(function (a, b) {
        return a - b;
      })
    );
    break;
  case "[z-a],[9-0]":
    result = str
      .sort()
      .reverse()
      .concat(
        number.sort(function (a, b) {
          return b - a;
        })
      );
    break;
  case "[a-z],[9-0]":
    result = str.sort().concat(
      number.sort(function (a, b) {
        return b - a;
      })
    );
    break;
  case "[z-a],[0-9]":
    result = str
      .sort()
      .reverse()
      .concat(
        number.sort(function (a, b) {
          return a - b;
        })
      );
    break;
  default:
    alert("Invalid input. Please enter a valid sort type.");
    result = [];
}

console.log(result);
