console.log("Welcome to JavaScript")

var v1 = 100;
console.log(v1);
console.log('v1 = ' + v1);
console.log('Type of v1 = ' + typeof(v1));

var v2 = "Kiran";
console.log("v2 = " + v2);
console.log('Type of v2 = ' + typeof(v2));

var v3 = true;
console.log("v3 = " + v3);
console.log('Type of v3 = ' + typeof(v3));

var v4 = 100;
console.log(`v4 = ${v4}`);
console.log(`v1 = ${v1}`);
console.log(`Next value of ${v4} is ${v4 + 1}`);
console.log(`Previous value of ${v4} is ${v4 - 1}`);
console.log(`Square of ${v4} is ${v4 * v4}`);
console.log(`Cube of ${v4} is ${v4 * v4 * v4}`);

var name = "Chitra Harini";
console.log(name);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(`First name: ${name.substr(0,name.indexOf(' '))}`);
console.log(`Last name: ${name.substr(name.lastIndexOf(' ')+1)}`);


var d = new Date();
console.log(d.getDate());
console.log(d.getMonth() +1);
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getDay());
console.log(d.toLocaleDateString());