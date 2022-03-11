window.onload = displayClock();

function displayClock(){
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    let date = new Date();
    let dayInWeek = weekday[date.getDay()];
    let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let timeRule = date.getHours() > 12 ? "PM" : "AM";
    let minute = date.getMinutes();
    
    let currentTime = `${dayInWeek} ${hour}:${minute} ${timeRule}`;

    document.getElementById("time").innerHTML = currentTime;

    setTimeout(displayClock, 1000); 
}

document.getElementById("folder_portfolio").addEventListener("dblclick", () => {
    const detail = document.getElementById("detail_portfolio");

    if (detail.style.display === "block") {
        detail.style.display = "none";
    }
    else {
        detail.style.display = "block";
    }
})

document.getElementById("close_portfolio").addEventListener("click", () => {
    document.getElementById("detail_portfolio").style.display = "none";
})