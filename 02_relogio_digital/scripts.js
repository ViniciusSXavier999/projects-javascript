// função de atualização de relógio 
function updateClock() {
    const clockElement = document.querySelector(".clock")
    const hoursElement = document.querySelector(".hours")
    const minutesElement = document.querySelector(".minutes")
    const secondsElement = document.querySelector(".seconds")

    // pegando a data atual 
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2, "0")

    console.log(now, hours, minutes)

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes
    secondsElement.textContent = seconds
    
}

setInterval(updateClock, 1000)