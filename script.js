let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
setInterval(() => {
    let today = new Date();
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds();
    hour.style.transform = `rotate(${(30*h) + (m/2)}deg)`
    minute.style.transform = `rotate(${(6*m)}deg)`
    second.style.transform = `rotate(${(6*s)}deg)`
}, 1000)
