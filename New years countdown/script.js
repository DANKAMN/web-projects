const newYears = '1 January 2024';



function countdown() {
    const newYearsDate = new Date(newYears);

    const currentDate = new Date();
        
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const seconds = Math.floor(totalSeconds / 1) % 60; 
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days= Math.floor(totalSeconds / 3600 / 24);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

countdown();

setInterval(countdown, 1000);