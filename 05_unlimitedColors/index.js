// Generate a random color

const randomColor = ()=>{
    const hex = '0123456789ABCDEF';
    let color = '#' ;
    for (let i = 0; i < 6; i++) { 
        color += hex[Math.floor(Math.random()*16)];
    }
    return color
};

// // START button
// let intervalId;
// const startButton = ()=>{
//     intervalId = setInterval(() => {
//         document.body.style.backgroundColor = randomColor();
//     }, 1000);
// }

// // STOP button
// const stopButton = ()=>{
//     clearInterval(intervalId)
// }


// Best code Practices

// START button
let intervalId;
const startButton = ()=>{
    if(!intervalId) {
        intervalId = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    }, 1500);
 }
};

// STOP button
const stopButton = ()=>{
    clearInterval(intervalId)
    intervalId = null;
};


// clickListener
document.querySelector('#start').addEventListener('click', startButton);
document.querySelector('#stop').addEventListener('click', stopButton);