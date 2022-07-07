let a  = 5; 
let b  = 6; 
let c  = 7; 
var s = (a + b + c)/2;
var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
document.getElementById('find_area').innerHTML = area;
// console.log(area);