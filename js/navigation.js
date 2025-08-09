/**
 * Realm of Chaos - Navigation Script
 * Handles navigation functionality including mobile menu, smooth scrolling, and header effects
 */

document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const mobileMenuOverlay = document.createElement('div');
    mobileMenuOverlay.className = 'mobile-menu-overlay';
    document.body.appendChild(mobileMenuOverlay);
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    // Mobile menu toggle
    function toggleMobileMenu() {
        const isOpen = navMenu.classList.contains('active');
        
        // Toggle menu
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
    
    function openMobileMenu() {
        navMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }
    
    function closeMobileMenu() {
        navMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
    
    // Toggle mobile menu when button is clicked
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                closeMobileMenu();
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 100; // Adjust based on your header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    function handleHeaderScroll() {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class based on scroll position
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    }
    
    // Initialize header state
    if (header) {
        window.addEventListener('scroll', handleHeaderScroll);
        handleHeaderScroll(); // Run once on load
    }
    
    // Set active link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function setActiveLink() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`.nav-link[href*=${sectionId}]`).classList.add('active');
            } else {
                const navLink = document.querySelector(`.nav-link[href*=${sectionId}]`);
                if (navLink) navLink.classList.remove('active');
            }
        });
    }
    
    // Set active link on scroll
    window.addEventListener('scroll', setActiveLink);
    
    // Set initial active link
    setActiveLink();
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                const dropdownContent = dropdown.querySelector('.dropdown-content');
                if (dropdownContent) {
                    dropdownContent.style.opacity = '0';
                    dropdownContent.style.visibility = 'hidden';
                }
            }
        });
    });
    
    // Handle dropdown toggle
    const dropdownToggles = document.querySelectorAll('.dropdown > .nav-link');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const dropdown = this.closest('.dropdown');
                const dropdownContent = dropdown.querySelector('.dropdown-content');
                
                // Close all other dropdowns
                document.querySelectorAll('.dropdown-content').forEach(content => {
                    if (content !== dropdownContent) {
                        content.style.opacity = '0';
                        content.style.visibility = 'hidden';
                    }
                });
                
                // Toggle current dropdown
                if (dropdownContent.style.visibility === 'visible') {
                    dropdownContent.style.opacity = '0';
                    dropdownContent.style.visibility = 'hidden';
                } else {
                    dropdownContent.style.opacity = '1';
                    dropdownContent.style.visibility = 'visible';
                }
            }
        });
    });
    
    // Handle window resize
    function handleResize() {
        if (window.innerWidth > 992) {
            closeMobileMenu();
        }
    }
    
    window.addEventListener('resize', handleResize);
    
    // Add loading class to body
    document.body.classList.add('loaded');
});

// Add class to body when page is fully loaded
window.addEventListener('load', function() {
    document.body.classList.add('page-loaded');
    
    // Remove preloader if it exists
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});
