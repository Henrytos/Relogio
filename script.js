let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let sc = document.getElementById("sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`

    //dysplay 
    let hour = document.getElementById('hour')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    let ampm = document.getElementById('ampm')

    
    hour.innerText = hh / 30 >= 12 ? hh / 30 : '0' + hh / 30
    minutes.innerText = mm / 6 >= 10 ? mm / 6 : '0' + mm / 6
    seconds.innerText = ss / 6 >= 10 ? ss / 6 : '0' + ss / 6
    ampm.innerText = hour.innerText > 12 ? 'PM' : 'AM'

});
