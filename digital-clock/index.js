const hourElement = document.getElementById("Hours")
const minuteElement = document.getElementById("Minutes")
const secondElement = document.getElementById("Seconds")
const ampmElement = document.getElementById("ampm")

function Updateclock(){
    let h= new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm="AM"

    if(h > 12){
        h = h - 12
        ampm = "PM"

    }
    h = h < 10 ? "0" + h: h
    m = m < 10 ? "0" + m: m
    s = s < 10 ? "0" + s: s

    hourElement.innerText = h;
    minuteElement.innerText = m;
    secondElement.innerText = s;
    ampmElement.innerText= ampm
    setTimeout(()=>{
        Updateclock()
    },1000)


}
Updateclock()

