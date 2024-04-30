window.addEventListener('scroll', function() {
  var video = document.querySelector('.floating-video');
  var navbar = document.querySelector('.navbar');
  var logo = document.querySelector('.logo img');
  var navLinks = document.querySelectorAll('.navbar a');
  var windowHeight = window.innerHeight;
  var scrollPosition = window.scrollY || window.pageYOffset;

  // Adjust scroll threshold based on window height
  var scrollThreshold = windowHeight / 2; // Example: Video starts to disappear when halfway down the window
  
 
 // Add 'scrolled' class to body when scrolled beyond the threshold
 if (scrollPosition > scrollThreshold) {
   document.body.classList.add('scrolled');
   navbar.style.backgroundColor = 'white'; // Change navbar background color to black
   logo.src = 'blac.png'; // Change logo image
   // Change navigation link colors to white
   navLinks.forEach(function(link) {
     link.style.color = '#0077b6';
   });
 } else {
   document.body.classList.remove('scrolled');
   navbar.style.backgroundColor = '#0077b6'; // Change navbar background color to white
   logo.src = 'WHITE.png'; // Revert logo image
   // Revert navigation link colors to black
   navLinks.forEach(function(link) {
     link.style.color = 'white';
   });
 }
});
window.addEventListener('scroll', function() {
  var contactBar = document.getElementById('contactBar');
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > 80) { // Adjust the scroll position threshold as needed
    contactBar.classList.add('hidden');
  } else {
    contactBar.classList.remove('hidden');
  }
});
// Get the <h3> element
var h3Element = document.querySelector('.content h3');

// Function to toggle the visibility of the <h3> element
function toggleH3Visibility() {
  if (window.scrollY > 200) { // Adjust the scroll threshold as needed
    h3Element.classList.add('hidden'); // Add the 'hidden' class
  } else {
    h3Element.classList.remove('hidden'); // Remove the 'hidden' class
  }
}

// Event listener for the scroll event
window.addEventListener('scroll', toggleH3Visibility);
