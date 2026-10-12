function ramzanCountDown(){

    let months = document.getElementById("months");
    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let mins = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    let nowDate = new Date();
    let ramzanDate = new Date("08 Feb, 2027");
    let msDiff = ramzanDate.getTime() - nowDate.getTime();

    let month = Math.floor(msDiff / (1000 * 60 * 60 * 24 * 30));
    let day = Math.floor(msDiff / (1000 * 60 * 60 * 24 ) % 30);
    let hour = Math.floor(msDiff / (1000 * 60 * 60 ) % 24);
    let min = Math.floor(msDiff / (1000 * 60 ) % 60);
    let sec = Math.floor(msDiff / (1000) % 60);

    months.innerHTML = month;
    days.innerHTML = day;
    hours.innerHTML = hour;
    mins.innerHTML = min;
    seconds.innerHTML = sec;
}
setInterval(ramzanCountDown,1000);
