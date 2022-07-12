const randRange = (min1, max1, min2, max2) => {
    const num1 = Math.floor(Math.random() * (max1 - min1) + min1)
    const num2 = Math.floor(Math.random() * (max2 - min2) + min2)
 
    return [num1, num2]
}
 
 console.log(randRange(-100, 0, 800, 900)) 
 console.log(randRange(-100, 0, 800, 900))
 console.log(randRange(-100, 0, 800, 900)) 