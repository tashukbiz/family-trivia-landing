// Simple interactivity for the landing page

document.addEventListener('DOMContentLoaded', function() {
    // Get the CTA button
    const ctaButton = document.querySelector('.cta-button');
    
    // Add click event listener
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Welcome to Family Trivia! Coming soon...');
        });
    }
    
    // Smooth scrolling for any future anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
