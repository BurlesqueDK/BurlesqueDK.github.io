//when a month is clicked, the events are shown
function showEvents(month){
    var event = document.getElementById(month).getElementsByClassName("events")[0];
    event.classList.toggle("show");
    console.log(`Dropped down events for ${month}`);
}