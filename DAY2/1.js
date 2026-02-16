const add = (a, b) => a + b;
var result = add(5, 10);
console.log(result);


const square = x => x * x;
console.log(square(4));


const sayHello = () => console.log("Hello, World!");
sayHello();


const multiply = (a, b) =>{
    return a * b;
    console.log("Function Body");
    return a * b;
};
console.log(multiply(3, 7));


let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(x => x * x);
console.log(squares);
console.log(numbers);

let fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => console.log(fruit));

const createUser = (name, age) => {
    return {
        name: name,
        age: age
    };
}
console.log(createUser("Harini", 20));