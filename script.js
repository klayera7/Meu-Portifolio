document.addEventListener('DOMContentLoaded', () => {
    const typedElement = document.querySelector('#typed-text');
    if (typedElement) {
        new Typed(typedElement, {
            strings: [
                "Desenvolvedor Front-end",
                "Estudante de Engenharia de Software",
                "Futuro Desenvolvedor Full-stack",
                "Entusiasta de Java & Back-end"
            ],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true
        });
    }

    const hamburger = document.querySelector('#hamburger');
    const navbar = document.querySelector('#navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('#header');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navbar.classList.contains('active')) {
            icon.classList.remove('ph-list');
            icon.classList.add('ph-x');
        } else {
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !hamburger.contains(e.target) && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        }
    });

    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const particlesElement = document.getElementById("tsparticles");
    if (particlesElement) {
        tsParticles.load("tsparticles", {
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    repulse: {
                        distance: 120,
                        duration: 0.5,
                    },
                },
            },
            particles: {
                color: {
                    value: "#8b5cf6",
                },
                links: {
                    color: "#8b5cf6",
                    distance: 180,
                    enable: true,
                    opacity: 0.15,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 900,
                    },
                    value: 40,
                },
                opacity: {
                    value: 0.25,
                    animation: {
                        enable: true,
                        speed: 1,
                        minimumValue: 0.1,
                        sync: false,
                    },
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
            background: {
                color: "transparent",
            },
        });
    }

    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            // Efeito de glow extra no hover
            card.style.boxShadow = `0 0 30px rgba(139, 92, 246, 0.5)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
        });
    });

    const projetoCards = document.querySelectorAll('.projeto-card');
    
    projetoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Efeito de inclinação sutil
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    const contactForm = document.querySelector('.contato-form form');
    
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (input.value === '') {
                    input.parentElement.classList.remove('focused');
                }
                if (input.hasAttribute('required') && input.value === '') {
                    input.style.borderColor = '#ef4444';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            input.addEventListener('input', () => {
                if (input.value !== '') {
                    input.style.borderColor = '';
                }
            });
        });

        contactForm.addEventListener('submit', (e) => {
            const nome = contactForm.querySelector('#nome');
            const email = contactForm.querySelector('#email');
            const mensagem = contactForm.querySelector('#mensagem');
            
            let isValid = true;
            
            if (!nome.value.trim()) {
                nome.style.borderColor = '#ef4444';
                isValid = false;
            }
            
            if (!email.value.trim() || !email.value.includes('@')) {
                email.style.borderColor = '#ef4444';
                isValid = false;
            }
            
            if (!mensagem.value.trim()) {
                mensagem.style.borderColor = '#ef4444';
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault();
                alert('Por favor, preencha todos os campos obrigatórios corretamente.');
            }
        });
    }

    // Video Modal functionality
    const videoModal = document.getElementById('video-modal');
    const modalVideoPlayer = document.getElementById('modal-video-player');
    const videoModalClose = document.querySelector('.video-modal-close');
    const videoModalOverlay = document.querySelector('.video-modal-overlay');
    const backendVideos = document.querySelectorAll('.backend-video');

    function openVideoModal(videoSrc) {
        if (!videoSrc) {
            return; // No video source, do nothing
        }
        
        modalVideoPlayer.src = videoSrc;
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Auto-play the video
        modalVideoPlayer.play();
    }

    function closeVideoModal() {
        videoModal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Pause and reset video
        modalVideoPlayer.pause();
        modalVideoPlayer.currentTime = 0;
        modalVideoPlayer.src = '';
    }

    backendVideos.forEach(video => {
        video.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            
            if (videoSrc) {
                openVideoModal(videoSrc);
            } else {
                // Efeito de clique mesmo sem vídeo
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });

    if (videoModalClose) {
        videoModalClose.addEventListener('click', closeVideoModal);
    }

    if (videoModalOverlay) {
        videoModalOverlay.addEventListener('click', closeVideoModal);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });

    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroContent = heroSection.querySelector('.hero-content');
            
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / 700);
            }
        });
    }

    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        document.querySelectorAll('.reveal').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.transition = 'none';
        });
    }

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'c' && !e.ctrlKey && !e.metaKey && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
        }
        
        if (e.key === 'h' && !e.ctrlKey && !e.metaKey && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            document.querySelector('#inicio')?.scrollIntoView({ behavior: 'smooth' });
        }
    });

    console.log('🚀 Portfólio Alex Garcia - Todos os scripts carregados com sucesso!');
});