// Futuristic Animations and Interactive Effects

document.addEventListener('DOMContentLoaded', function() {
    
    // Simplified background effects
    function createSimpleBackground() {
        // Keep only essential background elements
        console.log('Simple background initialized');
    }
    
    // Image handling removed - no photos in use
    
    // Create grid overlay
    function createGridOverlay() {
        const gridOverlay = document.createElement('div');
        gridOverlay.className = 'grid-overlay';
        document.body.appendChild(gridOverlay);
    }
    
    // Create particle system
    function createParticleSystem() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random positioning and timing
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = (8 + Math.random() * 4) + 's';
            
            particlesContainer.appendChild(particle);
        }
        
        document.body.appendChild(particlesContainer);
    }
    
    // Add futuristic card classes to existing content
    function enhanceContentCards() {
        // Enhance main content areas
        const mainContent = document.querySelector('.page__content');
        if (mainContent) {
            mainContent.classList.add('futuristic-card');
        }
        
        // Enhance sidebar
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.classList.add('animated-border');
        }
        
        // Add neon text effect to main title
        const mainTitle = document.querySelector('h1');
        if (mainTitle) {
            mainTitle.classList.add('neon-text');
        }
        
        // Add holographic effect to section headers
        const sectionHeaders = document.querySelectorAll('h2');
        sectionHeaders.forEach(header => {
            header.classList.add('neon-glow');
        });
        
        // Enhance publication and project cards
        const publications = document.querySelectorAll('.archive__item');
        publications.forEach(pub => {
            pub.classList.add('futuristic-card', 'holographic');
        });
    }
    
    // Smooth scrolling with easing
    function enhanceScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Mouse tracking for interactive effects
    function addMouseTrackingEffects() {
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;
            
            // Update CSS custom properties for mouse position
            document.documentElement.style.setProperty('--mouse-x', mouseX);
            document.documentElement.style.setProperty('--mouse-y', mouseY);
        });
        
        // Add parallax effect to geometric shapes
        const shapes = document.querySelectorAll('.geometric-shape');
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translate(${mouseX * speed * 20}px, ${mouseY * speed * 20}px)`;
        });
    }
    
    // Intersection Observer for scroll animations
    function addScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe all futuristic cards
        const cards = document.querySelectorAll('.futuristic-card');
        cards.forEach(card => {
            observer.observe(card);
        });
    }
    
    // Typing animation for main bio text
    function addTypingAnimation() {
        const bioElement = document.querySelector('.author__bio');
        if (bioElement) {
            const originalText = bioElement.textContent;
            bioElement.textContent = '';
            
            let i = 0;
            const typeWriter = function() {
                if (i < originalText.length) {
                    bioElement.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };
            
            // Start typing animation after a delay
            setTimeout(typeWriter, 1000);
        }
    }
    
    // Dynamic color shifting based on time
    function addTimeBasedColorShifting() {
        setInterval(() => {
            const hour = new Date().getHours();
            const hue = (hour * 15) % 360; // Changes hue based on hour
            
            document.documentElement.style.setProperty('--dynamic-hue', hue);
        }, 60000); // Update every minute
    }
    

    
    // Performance optimization: Reduce animations on mobile
    function optimizeForMobile() {
        if (window.innerWidth <= 768) {
            // Disable heavy animations on mobile
            const particleContainer = document.querySelector('.particles');
            if (particleContainer) {
                particleContainer.style.display = 'none';
            }
            
            // Mobile optimizations applied
        }
    }
    
    // Initialize all effects
    function initializeFuturisticEffects() {
        createSimpleBackground();
        createGridOverlay();
        createParticleSystem();
        enhanceContentCards();
        enhanceScrolling();
        addMouseTrackingEffects();
        addScrollAnimations();
        addTypingAnimation();
        addTimeBasedColorShifting();
        optimizeForMobile();
        
        console.log('🚀 Futuristic effects initialized!');
    }
    
    // Start the magic
    initializeFuturisticEffects();
    
    // Handle window resize
    window.addEventListener('resize', optimizeForMobile);
    
});

// Additional CSS animations via JavaScript
const additionalStyles = `
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .futuristic-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .futuristic-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Dynamic mouse-based gradients */
    body::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
            600px circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%),
            rgba(0, 212, 255, 0.1) 0%,
            transparent 40%
        );
        pointer-events: none;
        z-index: -1;
        transition: all 0.3s ease;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);