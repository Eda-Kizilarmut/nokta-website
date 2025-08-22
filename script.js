// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {

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
 
    // ================= CONSULTANCY CARD LAYOUT, TEXT, AND ARROW SWAP ==================
    const swapArrows = document.querySelectorAll('.swap-arrow');

    swapArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const card = arrow.closest('.consultancy-card');
            if (card) {
                
                // ACTION 1: Toggle the class to flip the layout (image and text)
                card.classList.toggle('swapped');

                // ACTION 2: Find the text container and swap the content
                const textContainer = card.querySelector('.consultancy-text');
                if (textContainer) {
                    const contentBlocks = textContainer.querySelectorAll('.content-block');
                    
                    let activeIndex = -1;
                    contentBlocks.forEach((block, index) => {
                        if (block.classList.contains('active')) {
                            activeIndex = index;
                        }
                    });
                    
                    if (activeIndex !== -1) {
                        contentBlocks[activeIndex].classList.remove('active');
                    }
                    
                    const nextIndex = (activeIndex + 1) % contentBlocks.length;
                    contentBlocks[nextIndex].classList.add('active');
                }

                // ACTION 3: Change the arrow icon's direction
                const arrowIcon = arrow.querySelector('i'); // Get the <i> element inside the button
                
                if (arrowIcon.classList.contains('fa-chevron-right')) {
                    arrowIcon.classList.remove('fa-chevron-right');
                    arrowIcon.classList.add('fa-chevron-left');
                } else {
                    arrowIcon.classList.remove('fa-chevron-left');
                    arrowIcon.classList.add('fa-chevron-right');
                }
            }
        });
    });

    // ==================== SUPPLIERS LOGO SLIDER (SEAMLESS LOOP) ====================
    // This is the newly added block
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