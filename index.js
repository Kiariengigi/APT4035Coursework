function TimebasedEvent(){
    const currentHour = new Date().getHours(); 
    const backgroundimg = document.getElementById('hero_page');
    const username = document.getElementById('name');
    console.log(currentHour);

    if (currentHour >= 0 && currentHour < 12){
        Welcome_text.textContent = "Morning!";
        backgroundimg.style.backgroundImage = "url('Morning.jpg')"
    } else if (currentHour >= 12 && currentHour < 18){
        Welcome_text.textContent = "Afternoon!";
        backgroundimg.style.backgroundImage = "url('Afternoon.jpg')"
    } else if (currentHour >= 18 && currentHour < 24){
        Welcome_text.textContent = "Evening!";
        backgroundimg.style.backgroundImage = "url('Night.jpg')"
        username.style.color = "White";

    }
}
document.addEventListener('DOMContentLoaded', TimebasedEvent);