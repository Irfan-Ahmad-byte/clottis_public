// Clottis Landing Page — Enhanced JavaScript
// Features: Particle background, counter animations, scroll reveals, navbar glow, smooth carousel

document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // BREAKING BANNER
    // ============================================
    const breakingBanner = document.getElementById('breakingBanner');
    const breakingClose = document.getElementById('breakingClose');

    if (breakingBanner) {
        // Check if user already dismissed it this session
        if (sessionStorage.getItem('breakingBannerDismissed') === 'true') {
            breakingBanner.classList.add('hidden');
        } else {
            document.body.classList.add('has-breaking-banner');
        }

        if (breakingClose) {
            breakingClose.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                breakingBanner.classList.add('hidden');
                document.body.classList.remove('has-breaking-banner');
                sessionStorage.setItem('breakingBannerDismissed', 'true');
            });
        }
    }

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // ============================================
    // HERO CAROUSEL
    // ============================================
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;
    let autoPlayInterval;
    const autoPlayDelay = 6000;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function prevSlide() {
        let prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            stopAutoPlay();
            nextSlide();
            startAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            stopAutoPlay();
            prevSlide();
            startAutoPlay();
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            stopAutoPlay();
            showSlide(index);
            startAutoPlay();
        });
    });

    startAutoPlay();

    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoPlay);
        carouselContainer.addEventListener('mouseleave', startAutoPlay);
    }

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // NAVBAR — SCROLL EFFECT
    // ============================================
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ============================================
    // SCROLL REVEAL ANIMATIONS (Staggered)
    // ============================================
    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -60px 0px'
    });

    // Add reveal class and stagger delays to cards
    function setupRevealAnimations() {
        const groups = [
            '.service-card',
            '.package-card',
            '.why-card',
            '.stat-box',
            '.blog-card',
            '.platform-card',
            '.faq-item'
        ];

        groups.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((el, index) => {
                el.classList.add('reveal');
                el.setAttribute('data-delay', Math.min(index + 1, 5));
                revealObserver.observe(el);
            });
        });

        // Also reveal section headers
        document.querySelectorAll('.section-header').forEach(header => {
            header.classList.add('reveal');
            revealObserver.observe(header);
        });

        // Budget section
        const budgetText = document.querySelector('.budget-text');
        const budgetCard = document.querySelector('.budget-card');
        if (budgetText) {
            budgetText.classList.add('reveal');
            revealObserver.observe(budgetText);
        }
        if (budgetCard) {
            budgetCard.classList.add('reveal');
            budgetCard.setAttribute('data-delay', '2');
            revealObserver.observe(budgetCard);
        }

        // CTA section
        const ctaContent = document.querySelector('.cta-content');
        if (ctaContent) {
            ctaContent.classList.add('reveal');
            revealObserver.observe(ctaContent);
        }
    }

    setupRevealAnimations();

    // ============================================
    // COUNTER ANIMATION (Stats)
    // ============================================
    function animateCounter(element, target, duration = 2000) {
        const isPercent = target.includes('%');
        const isDollar = target.includes('$');
        const isBillion = target.includes('B');
        const isRange = target.includes('-');

        // For simple values like "27%" or "$21B"
        let numericVal;
        if (isRange) {
            // For "40-60%" just show the text directly after animation
            let current = 0;
            const end = 60;
            const start = performance.now();

            function update(timestamp) {
                const elapsed = timestamp - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic

                current = Math.floor(eased * end);
                if (current <= 40) {
                    element.textContent = current + '%';
                } else {
                    element.textContent = '40-' + current + '%';
                }

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    element.textContent = target;
                }
            }
            requestAnimationFrame(update);
            return;
        }

        // Clean the number
        let cleanNum = parseFloat(target.replace(/[^0-9.]/g, ''));
        if (isNaN(cleanNum)) {
            element.textContent = target;
            return;
        }

        const start = performance.now();

        function update(timestamp) {
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            let current = Math.floor(eased * cleanNum);

            let display = '';
            if (isDollar) display += '$';
            display += current;
            if (isBillion) display += 'B';
            if (isPercent) display += '%';

            element.textContent = display;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
            }
        }

        requestAnimationFrame(update);
    }

    // Observe stat values for counter animation
    const counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = el.getAttribute('data-target');
                if (target) {
                    animateCounter(el, target, 1800);
                }
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.stat-value').forEach(el => {
        el.setAttribute('data-target', el.textContent.trim());
        el.textContent = '0';
        counterObserver.observe(el);
    });

    // Also animate hero stat numbers
    document.querySelectorAll('.stat-number').forEach(el => {
        el.setAttribute('data-target', el.textContent.trim());
        counterObserver.observe(el);
    });

    // ============================================
    // PARTICLE CANVAS BACKGROUND
    // ============================================
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;
        let mouseX = 0;
        let mouseY = 0;

        function resizeCanvas() {
            const hero = document.querySelector('.hero-carousel');
            canvas.width = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
        }

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
                this.opacity = Math.random() * 0.4 + 0.1;
                this.hue = Math.random() > 0.5 ? 190 : 270; // cyan or violet
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around edges
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                // Subtle pulse
                this.opacity += Math.sin(Date.now() * 0.001 + this.x) * 0.002;
                this.opacity = Math.max(0.05, Math.min(0.5, this.opacity));
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue}, 80%, 65%, ${this.opacity})`;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            // Fewer particles for performance
            const count = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        function drawConnections() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        const opacity = (1 - dist / 120) * 0.12;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            drawConnections();
            animationId = requestAnimationFrame(animate);
        }

        // Only run particles if user hasn't set reduced motion
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            resizeCanvas();
            initParticles();
            animate();

            window.addEventListener('resize', () => {
                resizeCanvas();
                initParticles();
            });
        }

        // Cleanup on page hidden
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animationId);
            } else {
                animate();
            }
        });
    }

    // ============================================
    // NAVBAR MOUSE GLOW EFFECT
    // ============================================
    if (navbar && window.innerWidth > 768) {
        navbar.addEventListener('mousemove', function (e) {
            const rect = navbar.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            navbar.style.background = `
                radial-gradient(300px circle at ${x}px ${y}px, rgba(0, 212, 255, 0.06), transparent 60%),
                rgba(10, 14, 26, ${window.scrollY > 30 ? '0.95' : '0.7'})
            `;
        });

        navbar.addEventListener('mouseleave', function () {
            navbar.style.background = '';
        });
    }

    // ============================================
    // WHATSAPP NUMBER VALIDATION
    // ============================================
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        if (link.href.includes('XXXXXXXXXX')) {
            console.warn('⚠️ Remember to replace WhatsApp number in HTML');
        }
    });

    // ============================================
    // CALENDLY LINK VALIDATION
    // ============================================
    const calendlyLinks = document.querySelectorAll('a[href*="calendly.com/your-link"]');
    calendlyLinks.forEach(link => {
        if (link.href.includes('your-link')) {
            console.warn('⚠️ Remember to replace Calendly link in HTML');
        }
    });
});

// ============================================
// KEYBOARD NAVIGATION FOR CAROUSEL
// ============================================
document.addEventListener('keydown', function (e) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;

    if (e.key === 'ArrowLeft') {
        document.getElementById('prevBtn')?.click();
    } else if (e.key === 'ArrowRight') {
        document.getElementById('nextBtn')?.click();
    }
});
