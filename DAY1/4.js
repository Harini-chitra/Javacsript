var e1 = {id:1, ename:"Harini",job : "Developer", salary : 50000};
console.log(e1);
console.log(e1.id);
console.log(e1.ename);
console.log(e1.job);
console.log(e1.salary);



var employees = [
 {id:201,ename:"Allen",job:"Admin",salary:12000},
 {id:202,ename:"Bobby",job:"Programmer",salary:15000},
 {id:203,ename:"Cathe",job:"Trainer",salary:21000},
 {id:204,ename:"David",job:"Developer",salary:18000}
];
for ( var i=0 ; i<employees.length ; i++ )
 console.log ( employees[i].id+" "+employees[i].ename+" "+employees[i].job+ " "+employees[i].salary);


for ( let e of employees){
 for ( var i in e ){
 console.log(`${i} = ${e[i]}`);
 }
 console.log("==========");
}


function isZero(num){
    return num ==0;
}
console.log(isZero(0));
console.log(isZero(5));

var n=9;
if ( isZero(n))
 console.log("Input is zero");
else
 console.log(`${n} is not zero`);

function sayHello(){
    console.log("Hello from Function!");
}
function drawLine(){
    var msg = '';
    for( var i = 1; i <= 50; i++)
        msg += '-';
    console.log(msg);
}

drawLine();
sayHello();
drawLine();