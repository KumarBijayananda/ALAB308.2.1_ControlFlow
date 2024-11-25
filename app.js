const availableArea = 3.1415 * 5 * 5;

let weekNum,
  areaNeeded = 0;

//Part 1 of the assignment for week 1, 2 and 3.
function whatToDo(weekNum) {
  areaNeeded = 20 * (2 ** weekNum - 1) * 0.8;

  if (areaNeeded > 0.8 * availableArea) {
    return "Prune. Area needed is: " + areaNeeded;
  } else if (areaNeeded > 0.5 * availableArea) {
    return "Monitor. Area needed is: " + areaNeeded;
  } else {
    return "Grow. Area needed is: " + areaNeeded;
  }
}

console.log("For week 1, we should " + whatToDo(1) + " meter squared");
console.log("For week 2, we should " + whatToDo(2) + " meter squared");
console.log("For week 3, we should " + whatToDo(3) + " meter squared");

//Part 2 of the assignment: 100 plants for 10 weeks

function whatToDo100(weekNum) {
  let areaNeeded = 100 * (2 ** weekNum - 1) * 0.8;
  return areaNeeded;
}
console.log(
  "The amount of additional space that would be required for 100 plants for 10 weeks :" +
    whatToDo100(10) +
    " meter squared"
);
console.log(
  "Radius of this expanded garden: " +
    Math.sqrt(whatToDo100(10) / 3.1415).toFixed(2) +
    " meters"
);

//Part 3 of the Assignment
try {
  if (areaNeeded <= availableArea) {
    console.log("Area available is enough.");
  } else {
    throw "Not enough space is available !!";
  }
} catch (error) {
  console.log("Area could not be calculate: " + error);
}
