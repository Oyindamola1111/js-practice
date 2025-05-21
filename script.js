// let fruits=["mango","cherry","apple","lime","cake"];
// console.log(fruits);

// let man=["mango","cherry","apple","lime","cake"];
// console.log(man[4]);

// let woman=["pin","biro","gun","key","bike","shaft"];
// woman.splice(2,0,"mob");
// console.log(woman);

// let seun=["cake","gun","house","junk","love"];
// seun.splice(4,1,)
// console.log(seun);

// let kamo=["open",["grape","queen"],"loko","grass","rom"];
// kamo.splice(0,1,"mango");
// console.log(kamo);

// let orange=[30,40,3,6,45,23,200,12,2,90,];
// console.log(orange.length);

// let kama=[90,78,3,4,2,1,5,6,55,7];
// kama.push("bolu","tun");
// console.log(kama);

// //if in array
// let age=18;
// if(age>=18) {console.log("you are eligible");} 

// //if...else
// let you=19;
// if (you>=19) {console.log("yes");}
// else{console.log("no");}

// //else .... if handles multiple conditions

// let score=75;
// if(score>=90) {console.log("A grade");}
// else if(score>=80) {console.log("B grade");}
// else if(score>=70) {console.log("C grade");}
// else{console.log("Failed");}

// //array.include

// let message=["hello","world","you","group","big"];
// console.log(message.includes("world"));
// console.log(message.includes("you"));
// console.log(message.includes("pain"));






// Function to increment number and change color
// function increase() {
//     let numberBox = document.getElementById("number");
//     let currentNumber = parseInt(numberBox.innerText);
//     numberBox.innerText = currentNumber + 1;

//     // Change color to red (you can change this to any color or random color later)
//     numberBox.style.color = "red";
//   }

  


//   let numberBox = document.getElementById("number");

//   // Define the function to increase the number
//   function increase() {
//     let currentNumber = parseInt(numberBox.innerText);
//     numberBox.innerText = currentNumber + 1;
//     numberBox.style.color = "red";  // Change color to red
//   }




//   let teewhy = document.getElementById("number")
//   function dami() {
//     console.log("teewhy ");
    
//   }



//   let stone = document.getElementById("number")


//   function change() {
//     stone.innerText = "my name is teewhy"
//   }

// let bag = document.getElementById("number")

// function change() {
//     bag.innerText = "Abdul Maleek"
// }

// let score = document.getElementById("age");

//     function increase() {
//       let number = parseInt(score.innerText);
//       score.innerText = number + 1;
//     }

//     function decrease() {
//       let number = parseInt(score.innerText);
//       if (number > 0) {
//         score.innerText = number - 1;
//       } else {
//        alert("Can't go below 0")
//       }
//     }



// let a = document.getElementById("number");
// function change() {
//   let b = parseInt(a.innerText);
//   a.innerText = b + 1;
// a.style.color="blue";
// a.style.backgroundColor="yellow";



//   if (b <= 10){
//     a.innerText = b + 1 ;
//   } else {alert("cant go further")}
// }


// let start = document.getElementById("digit");
// function increase() {
//   let number = parseInt(start.innerText);
//   start.innerText = number + 1;
//   start.style.color="green";
//   start.style.fontSize="40px";
// }
// // if(number <= 11){
// //   start.innerText = number + 1;
// // } else{alert("cant go further")}

// function decrease() {
//   let number = parseInt(start.innerText);
//   start.innerText = number - 1;
//   if (number <= 1){
//     alert("cant go below 0")
//   }
//   start.style.color="red";
//   start.style.fontSize="40px";
// }

// let a = document.getElementById("mali");
// function increase() {
//   let b = parseInt(a.innerText);
//   a.innerText = b + 1;
//   a.style.color="green";
//   a.style.fontSize="40px";
// }

// function decrease() {
//   let b = parseInt(a.innerText);
//   a.innerText = b - 1;
//   a.style.color="red";
//   a.style.fontSize="40px";
// }



// string methods .... a must know

// let myStr = "Hello javascript World";
// console.log(myStr);
// console.log(myStr.toLowerCase());
// console.log(myStr.toUpperCase());
// console.log(myStr.charAt());
// console.log(myStr.indexOf("World"));
// console.log(myStr.includes("Hello"));
// console.log(myStr.slice(2,5));
// console.log(myStr.trim());
// console.log(myStr.replace("World", "idiot"));
// console.log(myStr.split());
// console.log(myStr.split(" ")[2]);
// console.log(myStr.startsWith("Hello"));
// console.log(myStr.endsWith("hi"));

// console.log(myStr.trim()); // takes off un-neccessary spaces in sentences
// console.log(myStr.replace("World", "Universe")); // replace world and input universe


// NUMBER METHODS

// let num = 42.769;
// console.log(num);
// console.log(num.toString());
// console.log(num.toFixed());




// Math Method

// console.log(Math.PI);
// console.log(Math.round(41.945));
// console.log(Math.floor(42.342));
// console.log(Math.ceil(42.2));
// console.log(Math.max(12,4,3,7));
// console.log(Math.min(12,4,6,8));
// console.log(Math.pow(23,70));
// console.log(Math.sqrt(144));
// console.log(Math.random()*100);
// console.log(Math.floor(Math.random()*100));





// OBJECTS

// let student = {
//     name: "shade",
//     age: 34,
//     mail: "shade@gmail.com"
// };
// console.log(student);
// console.log(student.name);
// console.log(Object.keys(student));
// console.log(Object.values(student));


// console.log(student.age);
// console.log(student.mail);





// FUNCTIONS

// function myName(name) {
//     console.log(name);  
// }
// myName("damola");
// myName("idiot");
// myName("money");

// function addNum(a, b) {
//     console.log(a+b);
    
// }
// addNum(30,8);

// function numbers() {
//     let num1 = prompt("Enter a number");
//     let num2 = prompt("Enter a number");
//     let num3 = prompt("Enter a number");
//     let num4 = prompt("Enter a number");
//     console.log(Math.max(num1,num2,num3,num4),"is the highest number");
// }
// numbers()

// function evenNumbers() {
//     let solution = prompt("Enter number")
//     if (solution % 2=== 0) {
//         console.log(`${solution} is an even number`);
//     }else{
//         console.log(`${solution} is an odd number`);
//     }
// }
// evenNumbers()

// function name() {
//     let grade = parseInt(prompt("Enter score"));
//     if (grade >= 90 && grade <= 100) {
//         console.log(`${grade} is A grade`)
//     }else if (grade >= 75 && grade < 90) {
//         console.log(`${grade} is B grade`);
//     }else if (grade >= 60 && grade < 75) {
//         console.log(`${grade} is C grade`);
//     }else if (grade >= 50 && grade < 60) {
//         console.log(`${grade} is D grade`);
//     }else if (grade >= 35 && grade < 50) {
//         console.log(`${grade} is E grade`);
//     }else if (grade >= 0 && grade < 35) {
//         console.log(`${grade} is F grade`);
//     }else{
//         console.log(`${grade} is invalid`);
//     }
// }
// name()

// function greaterNumber() {
//     let firstNumber = parseInt(prompt("Enter a number"));
//     let secondNumber = parseInt(prompt("Enter a number"));
//     if (firstNumber > secondNumber ) {
//         console.log(`${firstNumber}`, "firstNumber is greater");
//     }else if (secondNumber > firstNumber) {
//         console.log(`${secondNumber}`, "secondNumber is greater");
//     }else{
//         console.log("invalid");
//     }
// }
// greaterNumber()

// TO CHECK THE LENGTH OF A THING E.G NAME

// function numberLength() {
//     let name = prompt("Enter a Name")
//     console.log(name.length);
// }
// numberLength()


// Math




























 