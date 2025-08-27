// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // ================= TÜM İLETİŞİM BUTONLARINI CMM.HTML'E BAĞLA ==================
    
    // Header'daki İletişim butonu
    const contactButton = document.querySelector(".contact-btn");
    if (contactButton) {
        contactButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "cmm.html";
        });
    }

    // Hero section'daki tüm İletişim butonları
    const heroContactButtons = document.querySelectorAll('.hero-buttons .btn-light');
    heroContactButtons.forEach(button => {
        if (button.textContent.trim() === 'İletişim') {
            button.addEventListener("click", function (event) {
                event.preventDefault();
                window.location.href = "cmm.html";
            });
        }
    });

    // CTA section'daki İletişime geçin butonu
    const ctaContactButton = document.querySelector('.cta .btn-primary');
    if (ctaContactButton && ctaContactButton.textContent.includes('İletişime geçin')) {
        ctaContactButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "cmm.html";
        });
    }

    // Mobile navigation'daki İletişim linki
    const mobileContactLink = document.querySelector('.mobile-nav a[href="#"]:last-child');
    if (mobileContactLink && mobileContactLink.textContent.trim() === 'İletişim') {
        mobileContactLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "cmm.html";
            // Mobile menüyü kapat
            const mobileNav = document.getElementById('mobile-nav');
            const body = document.body;
            if (mobileNav) {
                mobileNav.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });
    }

    // Tüm "İletişim" içeren linkleri yakala (genel yaklaşım)
    const allContactLinks = document.querySelectorAll('a[href="#"]');
    allContactLinks.forEach(link => {
        if (link.textContent.trim() === 'İletişim' || 
            link.textContent.includes('İletişim') || 
            link.textContent.includes('İletişime geçin')) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                window.location.href = "cmm.html";
            });
        }
    });

    // ================= MOBILE NAVIGATION ==================
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const closeBtn = document.getElementById('close-btn');
    const body = document.body;

    // Function to open the mobile menu
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            mobileNav.classList.add('active');
            body.classList.add('no-scroll'); // Prevent background scrolling
        });
    }

    // Function to close the mobile menu
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    }

    // ================= HERO SLIDER ==================
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // Time in milliseconds (5 seconds)

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        // Show the correct slide
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Start the automatic slideshow if slides exist
    if (slides.length > 0) {
        // Show the first slide initially
        showSlide(currentSlide);
        // Set an interval to change slides automatically
        setInterval(nextSlide, slideInterval);
    }
 
    // =================== DANIŞMANLIK KARTI İÇERİK DEĞİŞTİRME (Figma) ===================
    const swapArrows = document.querySelectorAll('.swap-arrow');

    swapArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const card = arrow.closest('.consultancy-card');
            if (!card) return;

            // Kart içindeki tüm yazı ve resim bloklarını bul
            const contentBlocks = card.querySelectorAll('.content-block');
            const images = card.querySelectorAll('.card-image');
            
            // Şu anki aktif olanın indeksini bul
            let currentIndex = Array.from(contentBlocks).findIndex(block => block.classList.contains('active'));
            
            // Mevcut aktif sınıfları kaldır
            contentBlocks[currentIndex].classList.remove('active');
            images[currentIndex].classList.remove('active');

            // Bir sonraki içeriğin indeksini hesapla (liste bitince başa döner)
            const nextIndex = (currentIndex + 1) % contentBlocks.length;

            // Yeni içeriklere ve resimlere aktif sınıfını ekle
            contentBlocks[nextIndex].classList.add('active');
            images[nextIndex].classList.add('active');
        });
    });

    // ==================== SUPPLIERS LOGO SLIDER (SEAMLESS LOOP) ====================
    const logoTrack = document.querySelector('.logo-track');

    if (logoTrack) {
        // We select the list items (li) to be cloned
        const logos = logoTrack.querySelectorAll('li');
        
        // This clones each <li> and the <img> inside it, then appends it to the track
        logos.forEach(logoLi => {
            const clone = logoLi.cloneNode(true);
            logoTrack.appendChild(clone);
        });
    }

}); // This is the final closing bracket for the DOMContentLoaded event listener