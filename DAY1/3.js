for(let i=1; i<=10; i++)
    console.log( i );



var i = 1;
while(i<=10){
    console.log(i);
    i++;
}





let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
for(let fruit of fruits){
    console.log(fruit);
}





let name = "Harini";
for(let ch of name){
    console.log(ch);
}





var items = ["Pen", "Pencil", "Eraser", "Sharpener"];
console.log(items);
console.log(items[0]);
console.log(items[1]);
console.log(items.length);
console.log(items[items.length - 1]);
items.push("Paper");
console.log(items);
items.splice(2,1,"rani");
console.log(items);
items.unshift("gum");
console.log(items);