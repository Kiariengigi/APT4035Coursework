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
// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: "10 Essential UI Design Principles Everyone Should Know",
        excerpt: "Learn the fundamental UI design principles that will help you create more intuitive and engaging user interfaces.",
        author: "Kiarie Ngigi",
        date: "June 15, 2023",
        category: "design",
        image: "mehdi-mirzaie-kUe-dIOu5FE-unsplash.jpg",
        url: "#article-1"
    },
    {
        id: 2,
        title: "Getting Started with React Hooks",
        excerpt: "A comprehensive guide to understanding and implementing React Hooks in your web applications.",
        author: "Kiarie Ngigi",
        date: "July 2, 2023",
        category: "technology",
        image: "arif-riyanto-vJP-wZ6hGBg-unsplash.jpg",
        url: "#article-2"
    },
    {
        id: 3,
        title: "Top Training Tips for Peak Athletic Performance",
        excerpt: "Discover expert-backed strategies and routines to help athletes improve endurance, strength, and overall performance.",
        author: "Kiarie Ngigi",
        date: "July 18, 2023",
        category: "sports",
        image: "ayoub-abedrabbo-zi5nhOHveGo-unsplash.jpg",
        url: "#article-3"
    }
];
 // Get DOM elements
 const blogListElement = document.getElementById('blogList');
 const filterButtons1 = document.querySelectorAll('.filter-btn1');
 const loadMoreButton = document.querySelector('.load-more-btn');

 // Variables for pagination
 let currentPage = 1;
 const postsPerPage = 3;
 let filteredPosts = [...blogPosts];

 // Initialize the blog list
 document.addEventListener('DOMContentLoaded', () => {
     renderBlogPosts();
     
     // Add event listeners to filter buttons
     filterButtons1.forEach(button => {
         button.addEventListener('click', () => {
             const category = button.getAttribute('data-category');
             filterBlogPosts(category);
             
             // Update active button
             filterButtons1.forEach(btn => btn.classList.remove('active1'));
             button.classList.add('active1');
         });
     });
     
     // Add event listener to load more button
     loadMoreButton.addEventListener('click', loadMorePosts);
 });

 // Render blog posts
 function renderBlogPosts() {
     const startIndex = 0;
     const endIndex = currentPage * postsPerPage;
     const currentPosts = filteredPosts.slice(startIndex, endIndex);
     
     // Clear existing content if it's the first page
     if (currentPage === 1) {
         blogListElement.innerHTML = '';
     }
     
     // Create HTML for each blog post
     currentPosts.forEach(post => {
         const postElement = document.createElement('article');
         postElement.className = 'blog-card';
         postElement.setAttribute('data-category', post.category);
         
         postElement.innerHTML = `
             <div class="blog-image">
                 <img src="${post.image}" alt="${post.title}">
             </div>
             <div class="blog-content">
                 <span class="blog-category">${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
                 <h3 class="blog-title">
                     <a href="${post.url}">${post.title}</a>
                 </h3>
                 <div class="blog-meta">
                     <span class="blog-author">By ${post.author}</span>
                     <span class="blog-date">${post.date}</span>
                 </div>
                 <p class="blog-excerpt">${post.excerpt}</p>
                 <a href="${post.url}" class="read-more">Read More</a>
             </div>
         `;
         
         blogListElement.appendChild(postElement);
     });
     
     // Hide load more button if all posts are shown
     if (endIndex >= filteredPosts.length) {
         loadMoreButton.style.display = 'none';
     } else {
         loadMoreButton.style.display = 'block';
     }
 }

 // Filter blog posts by category
 function filterBlogPosts(category) {
     currentPage = 1;
     
     if (category === 'all') {
         filteredPosts = [...blogPosts];
     } else {
         filteredPosts = blogPosts.filter(post => post.category === category);
     }
     
     renderBlogPosts();
 }

 // Load more posts
 function loadMorePosts() {
     currentPage++;
     renderBlogPosts();
 }
 document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const messageSent = document.getElementById('messageSent');
    
    // Simple validation function
    const isValid = (input) => input.value.trim() !== '';
    
    // Email validation
    const isEmailValid = (email) => {
        const re = /^(([^<>()$$\\.,;:\s@"]+(\.[^<>()$$\\.,;:\s@"]+)*)|(".+"))@(($[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.trim());
    };
    
    // Show error
    const showError = (input, message) => {
        const formGroup = input.parentElement;
        formGroup.classList.add('error');
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.textContent = message;
    };
    
    // Remove error
    const removeError = (input) => {
        const formGroup = input.parentElement;
        formGroup.classList.remove('error');
    };
    
    // Add input event listeners
    firstNameInput.addEventListener('input', () => {
        if (isValid(firstNameInput)) {
            removeError(firstNameInput);
        }
    });
    
    lastNameInput.addEventListener('input', () => {
        if (isValid(lastNameInput)) {
            removeError(lastNameInput);
        }
    });
    
    emailInput.addEventListener('input', () => {
        if (isEmailValid(emailInput.value)) {
            removeError(emailInput);
        }
    });
    
    messageInput.addEventListener('input', () => {
        if (isValid(messageInput)) {
            removeError(messageInput);
        }
    });
    
    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isFormValid = true;
        
        // Validate first name
        if (!isValid(firstNameInput)) {
            showError(firstNameInput, 'Please enter your first name');
            isFormValid = false;
        }
        
        // Validate last name
        if (!isValid(lastNameInput)) {
            showError(lastNameInput, 'Please enter your last name');
            isFormValid = false;
        }
        
        // Validate email
        if (!isValid(emailInput)) {
            showError(emailInput, 'Please enter your email');
            isFormValid = false;
        } else if (!isEmailValid(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
            isFormValid = false;
        }
        
        // Validate message
        if (!isValid(messageInput)) {
            showError(messageInput, 'Please enter your message');
            isFormValid = false;
        }
        
        // If form is valid, submit it
        if (isFormValid) {
            // Simulate form submission with a timeout
            setTimeout(() => {
                form.style.display = 'none';
                messageSent.style.display = 'block';
            }, 1000);
            
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Get all skill items
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in viewport
            if (entry.isIntersecting) {
                animateSkill(entry.target);
                // Unobserve after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Trigger when at least 10% of the item is visible
    
    // Observe each skill item
    skillItems.forEach(item => {
        observer.observe(item);
    });
    
    // Function to animate a skill's progress bar
    function animateSkill(skillItem) {
        const percentage = parseInt(skillItem.getAttribute('data-percentage'));
        const progressBar = skillItem.querySelector('.progress-bar');
        const percentageText = skillItem.querySelector('.skill-percentage');
        
        // Animate progress bar width
        progressBar.style.width = `${percentage}%`;
        
        // Animate percentage counter
        animateCounter(0, percentage, 1500, value => {
            percentageText.textContent = `${Math.ceil(value)}%`;
        });
    }
    
    // Function to animate a counter
    function animateCounter(start, end, duration, callback) {
        let startTimestamp = null;
        
        function step(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = start + (progress * (end - start));
            
            callback(value);
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }
        
        window.requestAnimationFrame(step);
    }
    
    // For browsers that don't support IntersectionObserver
    if (!('IntersectionObserver' in window)) {
        skillItems.forEach(item => {
            animateSkill(item);
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const clockElement = document.getElementById('clock');
    
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    // Update immediately on page load
    updateClock();
    
    // Update every second
    setInterval(updateClock, 1000);
});
    