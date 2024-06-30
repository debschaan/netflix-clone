//NAVIGATION FADING
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) { // Verifica se houve scroll
      nav.classList.add('bg-background', 'z-20');
    } else {
      nav.classList.remove('bg-background', 'z-20');
    }
});

//SCROLLING CAROUSEL
// Ensure DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {

  // Select all carousel containers
  const carouselContainers = document.querySelectorAll('.category--carousel');

  //Apply function to each container
  carouselContainers.forEach(container => {
    const carousel = container.querySelector('.carousel--list');
    const prevButton = container.querySelector('.carousel-button.prev');
    const nextButton = container.querySelector('.carousel-button.next');
    const carouselItems = carousel.querySelectorAll('.carousel--item');

    // Calculate scroll amount based on the first item's width and margin
    const firstItem = carouselItems[0];
    const scrollAmount = firstItem.offsetWidth + parseInt(getComputedStyle(firstItem).marginRight);

    // Event listeners for each carousel
    prevButton.addEventListener('click', () => {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });

    nextButton.addEventListener('click', () => {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  })
});