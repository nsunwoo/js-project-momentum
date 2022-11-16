/*
const a = 5;
const b = 2;
let myName = "sunwoo";
// 기본적으로는 const 사용, 필요할 때만 let 사용, var 사용 X

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "Sunwoo";

console.log("your new name is " + myName);
*/

/*
const amIFat = null;
let something;

console.log(amIFat);
console.log(something);
*/

/*
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get item from array
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

// Changing values of certain index
daysOfWeek[1] = "Tuesday";
console.log(daysOfWeek);
*/

/*
// Object
const player = {
  name: "nico",
  points: 10,
  fat: true,
};
// array(list)와의 차이점: array(list)는 모든 값이 같은 의미를 가짐

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.points = player.points + 5;
console.log(player);

player.lastName = "potato";
console.log(player);

player.toBuy = ["olive", "pizza", "pasta"];
console.log(player);
*/

/*
function sayHello(nameOfPerson, age) {
  console.log("Hello, my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(a, b) {
  console.log(a + b);
}
function divide(a, b) {
  console.log(a / b);
}

plus(60, 8);
divide(98, 20);

const player = {
  name: "nico",
  points: 10,
  fat: true,
  sayHello: function (otherPersonsName) {
    console.log("Hello " + otherPersonsName + "! Nice to meet you.");
  },
};

console.log(player.name);
player.sayHello("Lynn");
player.sayHello("Nico");
*/

/*
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const addResult = calculator.add(2, 3);
const subtractResult = calculator.subtract(addResult, 10);
const multiplyResult = calculator.multiply(10, subtractResult);
*/

/*
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number.");
} else if (age <= 17) {
  console.log("You are too young to drink.");
} else if (age > 17 && age <= 50) {
  console.log("You can drink.");
} else if (age > 50 && age <= 80) {
  console.log("You should stop drinking!");
} else if (age === 100) {
  console.log("Wow! You are wise.");
} else {
  console.log("You can do whatever you want.");
}
*/

/*
document.title = "Hello from JS";
*/

/*
const title = document.getElementById("title");
console.dir(title);

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);
*/

/*
const hellos = document.getElementsByClassName("hello");

console.log(hellos);
*/

/*
const title = document.getElementsByTagName("h1");

console.log(title);
*/

/*
const title1 = document.querySelector(".hello h1");
const title2 = document.querySelectorAll(".hello h1");

console.log(title1);
console.log(title2);
*/

const h1 = document.querySelector("div.hello:first-child h1");

// console.dir(h1);

// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

// function handleMouseEnter() {
//   h1.innerText = "Mouse is here!";
// }
// function handleMouseLeave() {
//   h1.innerText = "Mouse is gone!";
// }
// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy() {
//   alert("copier!");
// }
// function handleWindowOffline() {
//   alert("SOS NO WIFI");
// }
// function handleWindowOnline() {
//   alert("ALL GOOD");
// }

h1.addEventListener("click", handleTitleClick);
// 함수를 인자로 넘겨줄 때 뒤에 괄호 쓰지 않는 것 주의!
// h1.onclick = handleTitleClick;

// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);
