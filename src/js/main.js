import '../css/estilo.css';

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            mobileMenu.setAttribute('aria-expanded', isOpen);
            mobileMenu.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
        });
    }

    // Carousel Logic
    const carouselInner = document.getElementById('carousel-inner');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    if (carouselInner) {
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        const updateCarousel = () => {
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        });

        // Auto play
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }, 5000);
    }

    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Close all items
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
                header.classList.add('active');
                header.querySelector('.icon').textContent = '-';
            } else {
                header.querySelector('.icon').textContent = '+';
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
