// There are three textboxes. The user will enter three numbers, one in each textbox.

// Create your own `script.js` and write a program that

// * When the button is clicked
// * ...display using `console.log` the largest number.

document.querySelector('#process').addEventListener('click', function(){
    num1 = document.querySelector('#num1').value
    num2 = document.querySelector('#num2').value
    num3 = document.querySelector('#num3').value
    
    console.log(Math.max(Math.max(num1, num2), num3))
})
