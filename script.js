// Add event listener to DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
    // Select all anchor elements with href starting with "#"
    const anchors = document.querySelectorAll('a[href^="#"]');
  
    // Iterate through each anchor element
    anchors.forEach((anchor) => {
      // Add click event listener to each anchor element
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        // If target element exists, scroll to it smoothly
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  
    // Function to filter content based on search input
    const searchContent = () => {
      const input = document.getElementById('searchInput');
      const filter = input.value.toUpperCase();
      const sections = document.querySelectorAll('main >.grid > section');
  
      // Iterate through each section element
      sections.forEach((section) => {
        const text = section.textContent || section.innerText;
  
        // If text contains filter, display section, otherwise hide it
        if (text.toUpperCase().indexOf(filter) > -1) {
          section.style.display = "";
        } else {
          section.style.display = "none";
        }
      });
    };
  
    // Add keyup event listener to search input
    document.getElementById('searchInput').addEventListener('keyup', searchContent);
  
    // Add submit event listener to subscription form
    document.getElementById('subscriptionForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const emailInput = document.getElementById('email');
  
      // Alert user with their email after submitting
      alert(`Thank you for subscribing, ${emailInput.value}!`);
      emailInput.value = ''; // Clear the input after submitting
    });
  });