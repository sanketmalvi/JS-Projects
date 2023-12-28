const clock = document.getElementById('clock')
// const time = document.querySelector('#clock')


setInterval(() => {
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerText = date.toLocaleTimeString()

}, 1000);