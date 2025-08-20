document.addEventListener('DOMContentLoaded', () => {

    //Animação de Digitação (Typed.js)
    const typedElement = document.querySelector('#typed-text');
    if (typedElement) {
        new Typed(typedElement, {
            strings: [
                "Olá, me chamo Alex",
                "Desenvolvedor Front-end"
            ],
            typeSpeed: 100,
            backSpeed: 70,
            backDelay: 2000,
            loop: true
        });
    }

    //Menu Hambúrguer
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });

    //Fundo de Partículas (tsParticles)
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
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#bb86fc",
                },
                links: {
                    color: "#bb86fc",
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
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
                    speed: 1.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 50,
                },
                opacity: {
                    value: 0.3,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 4 },
                },
            },
            detectRetina: true,
        });
    }
});