document.querySelectorAll('.nav-item.dropdown').forEach(function (element) {
  element.addEventListener('mouseover', function () {
    const dropdownMenu = this.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      dropdownMenu.classList.add('show');
    }
  });
  element.addEventListener('mouseout', function () {
    const dropdownMenu = this.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      dropdownMenu.classList.remove('show');
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 2500);  // Adjust the interval time as needed


const products = [
  {
      id: 1,
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "145/80 R12",
      price: 1000,
      rating: 4,
      reviews: 320,
      type: "Tube Type",
      warranty: "5 Year Warranty",
      // imageUrl: "./images/pngwing.com (2).png",
      imageUrl: "./images/img_main.png"
  },
  {
      id: 2,
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "145/80 R13",
      price: 50000,
      rating: 4,
      reviews: 320,
      type: "Tubeless",
      warranty: "5 Year Warranty",
      imageUrl: "./images/img_main.png"
  },
  {
      id: 3,
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "155/65 R13",
      price: 300,
      rating: 4,
      reviews: 320,
      type: "Tubeless",
      warranty: "5 Year Warranty",
      imageUrl: "./images/img_main.png"
  },
  {
      id: 4,
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "155/70 R13",
      price: 2000,
      rating: 4,
      reviews: 320,
      type: "Tubeless",
      warranty: "5 Year Warranty",
      imageUrl: "./images/img_main.png"
  },
  {
    id: 4,
    brand: "Apollo",
    model: "AMAZER 4G LIFE",
    size: "155/70 R13",
    price: 2900,
    rating: 4,
    reviews: 320,
    type: "Tubeless",
    warranty: "5 Year Warranty",
    imageUrl: "./images/img_main.png"
},
{
  id: 4,
  brand: "Apollo",
  model: "AMAZER 4G LIFE",
  size: "155/70 R13",
  price: 4000,
  rating: 4,
  reviews: 320,
  type: "Tubeless",
  warranty: "5 Year Warranty",
  imageUrl: "./images/img_main.png"
},
{
  id: 4,
  brand: "Apollo",
  model: "AMAZER 4G LIFE",
  size: "155/70 R13",
  price: 400,
  rating: 4,
  reviews: 320,
  type: "Tubeless",
  warranty: "5 Year Warranty",
 imageUrl: "./images/img_main.png"
},
{
  id: 4,
  brand: "Apollo",
  model: "AMAZER 4G LIFE",
  size: "155/70 R13",
  price: 100,
  rating: 4,
  reviews: 320,
  type: "Tubeless",
  warranty: "5 Year Warranty",
  imageUrl: "./images/img_main.png"
}
  // Add more products as needed
];


function renderProducts(products) {
  const productGrid = document.querySelector('.product-grid');
  productGrid.innerHTML = ''; // Clear previous products

  products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';

      productCard.innerHTML = `
          <img src="${product.imageUrl}" alt="${product.model}">
          <h3>${product.brand} ${product.model}</h3>
          <p>${product.size}</p>
          <p>₹${product.price.toLocaleString()}</p>
          <p>Rating: ${product.rating} (${product.reviews} Reviews)</p>
          <p>${product.type}</p>
          <p>${product.warranty}</p>
      `;

      productGrid.appendChild(productCard);
  });
}


document.getElementById('sort-options').addEventListener('change', function() {
  const sortBy = this.value;
  let sortedProducts = [...products];

  if (sortBy === 'price-low-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'popular') {
      sortedProducts.sort((a, b) => b.reviews - a.reviews);
  }

  renderProducts(sortedProducts);
});


function filterBySize(size) {
  const filteredProducts = products.filter(product => product.size === size);
  renderProducts(filteredProducts);
}

document.addEventListener('DOMContentLoaded', function() {
  renderProducts(products); // Initial render with all products
});


