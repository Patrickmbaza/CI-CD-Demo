// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme or prefer-color-scheme
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

// Apply saved theme
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Add animation
    themeToggle.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

function updateThemeIcon(theme) {
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Update timestamps
function updateTimestamps() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    };
    
    const formattedDate = now.toLocaleDateString('en-US', options);
    const timestamp = now.toISOString();
    
    document.getElementById('currentDate').textContent = formattedDate;
    document.getElementById('timestamp').textContent = timestamp;
}

// Animate pipeline stages
function animatePipeline() {
    const stages = document.querySelectorAll('.pipeline-stage');
    
    stages.forEach((stage, index) => {
        setTimeout(() => {
            stage.style.opacity = '1';
            stage.style.transform = 'translateY(0)';
        }, index * 300);
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    updateTimestamps();
    animatePipeline();
    
    // Set initial states for animation
    document.querySelectorAll('.pipeline-stage').forEach(stage => {
        stage.style.opacity = '0';
        stage.style.transform = 'translateY(20px)';
        stage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Update timestamps every minute
    setInterval(updateTimestamps, 60000);
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card, .test-card, .tech-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// Add console greeting
console.log('%c🚀 CI/CD Pipeline Demo', 'color: #58a6ff; font-size: 18px; font-weight: bold;');
console.log('%cThis page is automatically deployed using GitHub Actions and GitHub Pages.', 'color: #8b949e;');
console.log('%cRepository: https://github.com/Patrickmbaza/CI-CD-Demo', 'color: #3fb950;');