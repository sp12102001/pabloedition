document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    function searchContent() {
        const input = document.getElementById('searchInput');
        const filter = input.value.toUpperCase();
        const sections = document.querySelectorAll('main > .grid > section');
        sections.forEach(section => {
            const text = section.textContent || section.innerText;
            if (text.toUpperCase().indexOf(filter) > -1) {
                section.style.display = "";
            } else {
                section.style.display = "none";
            }
        });
    }
    document.getElementById('searchInput').addEventListener('keyup', searchContent);

    document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        alert('Thank you for subscribing, ' + emailInput.value + '!');
        emailInput.value = ''; // Clear the input after submitting
    });
});
