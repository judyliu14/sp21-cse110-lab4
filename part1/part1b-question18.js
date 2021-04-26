let d = new Date();

setInterval(callback, 1000);

function callback() {
    let time = d.toLocaleTimeString();
    console.log(time);
}