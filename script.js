document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Írógép effektus a címsorhoz
    const textElement = document.querySelector('.hero-content p');
    if (textElement) {
        const text = textElement.innerText;
        textElement.innerText = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                textElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        typeWriter();
    }

    // 2. Navigációs sáv hátterének változtatása görgetéskor
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.9)';
            header.style.boxShadow = 'none';
        }
    });

    // 3. Megjelenési animáció görgetéskor
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.project-card, section h2, .container p');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
