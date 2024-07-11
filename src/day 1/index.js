var method = prompt("Choose a method to execute: \n shift \n unshift \n concat \n slice \n splice \n push \n pop \n");

switch (method) {
    case "shift":
        var array = [];
        var text = prompt("Enter array elements separated by commas:").split(",");
        array = array.concat(text);
        console.log("Original array: ", array);
        var removedElement = array.shift();
        console.log("Removed element: ", removedElement);
        console.log("Updated array: ", array);
        break;
    case "unshift":
        var array = [];
        var text = prompt("Enter array elements separated by commas:").split(",");
        array = array.concat(text);
        var add = prompt("Enter adder element:");
        console.log("Original array: ", array);
        var addedElement = array.unshift(add);
        console.log("Removed element: ", add);
        console.log("Updated array: ", array);
        break;
    case "concat":
        var arrayFirst = [];
        var arraySecond = [];
        var text = prompt("Enter first array elements separated by commas:").split(",");
        arrayFirst = arrayFirst.concat(text);
        var text = prompt("Enter second array elements separated by commas:").split(",");
        arraySecond = arraySecond.concat(text);
        console.log(arrayFirst.concat(arraySecond));
        break;
    case "slice":
        var array = [];
        var text = prompt("Enter array elements separated by commas:").split(",");
        array = array.concat(text);
        var start = parseInt(prompt("Enter start index:"));
        var end = parseInt(prompt("Enter end index (optional, default is array length):"));
        if (isNaN(end)) {
            end = array.length;
        }
        console.log("Original array: ", array);
        var removedElements = array.slice(start, end);
        console.log("Removed elements: ", removedElements);
        break;
    case "splice":
        var array = [];
        var text = prompt("Enter array elements separated by commas:").split(",");
        array = array.concat(text);
        var start = parseInt(prompt("Enter start index:"));
        var removeCount = parseInt(prompt("Enter number of elements to remove (optional, default is 1):"));
        if (isNaN(removeCount)) {
            removeCount = 1;
        }
        var add = prompt("Enter elements to add separated by commas (optional):").split(",");
        console.log("Original array: ", array);
        var addedElements = array.splice(start, removeCount,...add);
        console.log("Updated array: ", array);
        break;
    case "push":
        var array = [];
        var text = prompt("Enter array elements separated by commas:").split(",");
        array = array.concat(text);
        var add = prompt("Enter element to add:");
        console.log("Original array: ", array);
        var addedElement = array.push(add);
        console.log("Updated array: ", array);
        break;
    case "pop":
        var array = [];
        var text = prompt("Enter array elements separated by commas:").split(",");
        array = array.concat(text);
        console.log("Original array: ", array);
        var removedElement = array.pop();
        console.log("Removed element: ", removedElement);
        console.log("Updated array: ", array);
        break;
    default:
        console.log("Invalid method choice.");
        break;
}
