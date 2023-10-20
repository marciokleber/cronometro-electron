const minutesEl = document.querySelector(".minutes")
const secondsEl = document.querySelector(".seconds")
const milisecondsEl = document.querySelector(".miliseconds")

const startBtn = document.querySelector(".start")
const pauseBtn = document.querySelector(".pause")
const restartBtn = document.querySelector(".restart")

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let isPause = false;

startBtn.addEventListener("click",start)
pauseBtn.addEventListener("click",pause)
restartBtn.addEventListener("click",restart)

function start(){
    isPause = false;
    interval = setInterval(() => {
        if(!isPause){
            miliseconds += 10;

            if(miliseconds === 1000){
                seconds++;
                miliseconds = 0;
            }

            if(seconds === 60){
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes)
            secondsEl.textContent = formatTime(seconds)
            milisecondsEl.textContent = formatTimeMili(miliseconds)
        }
    },10)
}

function pause(){
    isPause = true;
}

function restart(){
    clearInterval(interval)
    isPause = false;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    minutesEl.textContent = "00"
    secondsEl.textContent = "00"
    milisecondsEl.textContent = "000"
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatTimeMili(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time
}




