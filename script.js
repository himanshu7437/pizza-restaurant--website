  const images = [
    './images/menu1.jpg',
    './images/menu2.jpg',
    './images/menu3.jpg',
    './images/menu4.jpg',
  ];

  let currentIndex = 0;

  const imageElement = document.getElementById('carousel-image');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dotsContainer = document.getElementById('carousel-dots');

  images.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === currentIndex) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  });

  const updateCarousel = () => {
    imageElement.src = images[currentIndex];

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  };

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  updateCarousel();
