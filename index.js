function TimebasedEvent(){
    const currentHour = new Date().getHours(); 
    const backgroundimg = document.getElementById('hero_page');
    const username = document.getElementById('name');
    console.log(currentHour);

    if (currentHour >= 0 && currentHour < 12){
        Welcome_text.textContent = "Morning";
        backgroundimg.style.backgroundImage = "url('Morning.jpg')"
    } else if (currentHour >= 12 && currentHour < 18){
        Welcome_text.textContent = "Afternoon";
        backgroundimg.style.backgroundImage = "url('Afternoon.jpg')"
        username.style.color = "White";
    } else if (currentHour >= 18 && currentHour < 24){
        Welcome_text.textContent = "Evening";
        backgroundimg.style.backgroundImage = "url('Night.jpg')"
        username.style.color = "White";

    }
    
}

document.addEventListener('DOMContentLoaded', TimebasedEvent);

const toggle = document.getElementById('modeToggle');
const icon = document.getElementById('html')
const icon1 = document.getElementById('java')
const body = document.body;
    toggle.addEventListener('change', () => {
      body.classList.toggle('dark-mode');
      if (body.classList.contains('dark-mode')) {
        icon.src = 'html_white.png';
        java.src = 'java-script_white.png';
      } else {
        icon.src = 'html.png';
        java.src = 'java-script.png';
      }
      
    });
    document.addEventListener('DOMContentLoaded', () => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
    
        // Filter function
        const filterPortfolio = (category) => {
            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (category === 'all' || category === itemCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        };
    
        // Add click event to filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get filter category
                const filterValue = button.getAttribute('data-filter');
                
                // Filter items
                filterPortfolio(filterValue);
            });
        });
    });
    