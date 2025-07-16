const navDialog=document.getElementById('nav-dialog');
function handleMenu(){
  navDialog.classList.toggle('hidden')
}

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    const isDark = document.documentElement.classList.contains('dark');
    if (window.scrollY > 0) {
      if (isDark) {
        navbar.style.backgroundColor = 'black'; // Dark mode background
      } else {
        navbar.style.backgroundColor = 'white'; // Light mode background
      }
      navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      navbar.style.zIndex = '1000';
    } else {
      navbar.style.backgroundColor = 'transparent';
      navbar.style.boxShadow = 'none';
    }
  });
});




document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('.card');

  cards.forEach(function (card) {
      var hoverImage = card.querySelector('.hover-image');
      var hoverParagraph = card.querySelector('.hover-paragraph');

      card.addEventListener('mouseover', function () {
          hoverImage.style.display = 'none';
          hoverParagraph.style.display = 'block';
      });

      card.addEventListener('mouseout', function () {
          hoverImage.style.display = 'block';
          hoverParagraph.style.display = 'none';
      });
  });
});


// function toggleDarkMode() {
//   const bodyElement = document.body;
//   const iconElement = document.getElementById('theme-icon');
//   console.log('Toggle dark mode');

//   bodyElement.classList.toggle('dark'); // Toggle the 'dark' class

//   if (bodyElement.classList.contains('dark')) {
//     iconElement.classList.remove('fa-sun');
//     iconElement.classList.add('fa-moon');
//     iconElement.style.color = '#F5F5F5'; // Moon color
//   } else {
//     iconElement.classList.remove('fa-moon');
//     iconElement.classList.add('fa-sun');
//     iconElement.style.color = '#FFD43B'; // Sun color
//   }
// }


const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

// Theme Variables
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Get all containers that need to change background color
const containers = document.querySelectorAll('.theme-bg');

// Get the element with the home-background class
const homeBackground = document.querySelector('.home-background');
const serviceBackground = document.querySelector('.service-background')

// Get all cards that need to adjust styles for dark mode
const cards = document.querySelectorAll('.card');

// Icon Toggling
const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};

// Function to update container backgrounds
const updateBackgrounds = (isDark) => {
  containers.forEach(container => {
    if (isDark) {
      container.classList.add('dark-mode');
      container.classList.remove('light-mode');
    } else {
      container.classList.add('light-mode');
      container.classList.remove('dark-mode');
    }
  });

  // Update styles for cards in dark mode
  if (isDark) {
    cards.forEach(card => {
      card.classList.add('dark-mode');
      card.classList.remove('light-mode');
    });
  } else {
    cards.forEach(card => {
      card.classList.add('light-mode');
      card.classList.remove('dark-mode');
    });
  }

  // Update home-background class based on dark mode
  if (isDark) {
    homeBackground.classList.remove('home-background');
  } else {
    homeBackground.classList.add('home-background');
  }

  if (isDark) {
    serviceBackground .classList.remove('service-background');
  } else {
    serviceBackground.classList.add('service-background');
  }
};






// Initial Theme Check
const themeCheck = () => {
  const isDark = userTheme === "dark" || (!userTheme && systemTheme);
  if (isDark) {
    document.documentElement.classList.add("dark");
    sunIcon.classList.add("display-none");
    moonIcon.classList.remove("display-none");
  } else {
    document.documentElement.classList.remove("dark");
    moonIcon.classList.add("display-none");
    sunIcon.classList.remove("display-none");
  }
  updateBackgrounds(isDark);
};

// Manual Theme Switch
const themeSwitch = () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  iconToggle();
  updateBackgrounds(isDark);
};

// Call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
  themeSwitch();
});

moonIcon.addEventListener("click", () => {
  themeSwitch();
});

// Initial theme check
themeCheck();
