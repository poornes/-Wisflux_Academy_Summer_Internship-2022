
const animation= [
    {transform: 'rotate(0) scale(1)'},
    { transform: 'rotate(360deg) scale(0)' }
];
const animationConfig= {
    duration: 2000,
    iterations: 1
    
};
var img1 = document.getElementById("img1");

var img2 = document.getElementById("img2");

var img3 = document.getElementById("img3");



async function imageAnimation(){
    img1.animate(animation,animationConfig)
    await img1.animate(animation,animationConfig).finished
    img2.animate(animation,animationConfig)
    await img2.animate(animation,animationConfig).finished
    img3.animate(animation,animationConfig)
}
imageAnimation();

