// multiplication table for 9
// for loop
// console.log('-------multiplication table for p----------')
// const number = 9;
// for (let i = 1; i <= 10; i++) {
//     console.log(number, '×', i, '=', (number * i))
// }

// // while
// console.log('------------multiplication table for 7----------')
// const n = 7;
// let p = 1;
// while (p <= 10){
//     console.log(n,'×', p, '=', (p*n))
//     p++
// }


// Initial countdown value

let countdown = 81;
function updateTimer() {
    console.log(countdown);
    countdown--;
    if (countdown < 65) {
        clearInterval(timerInterval);
    }
}
const timerInterval = setInterval(updateTimer, 1000);
