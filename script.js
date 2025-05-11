document.addEventListener('DOMContentLoaded', function() {
    // Event to change text on button click
    document.getElementById("changeTextBtn").addEventListener("click", function() {
        document.getElementById("title").innerText = "We love Web Development!🤩";
    });

    // Image gallery navigation (automatic slideshow)
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.gallery-image');

    // Hide all images initially
    images.forEach(image => image.style.display = 'none');

    // Function to show the current image
    function showImage(index) {
        images.forEach(image => image.style.display = 'none'); 
        images[index].style.display = 'block'; 
    }

    // Show the first image initially
    showImage(currentImageIndex);

    // Automatic slideshow function
    setInterval(function() {
        currentImageIndex = (currentImageIndex + 1) % images.length; 
        showImage(currentImageIndex);
    }, 3000); 

    // Tab functionality
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
            document.getElementById(tabId).style.display = 'block';
        });
    });

    
   // Form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    let isValid = true;

    // Validate Name
    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    }

    // Validate Email
    if (!email.includes('@')) {
        document.getElementById('emailError').innerText = 'Please enter a valid email.';
        isValid = false;
    }

    // Validate Password
    if (password.length < 8) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        this.reset(); // Clear the form after successful submission
    }
});

    // Keypress detection
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { 
            document.getElementById('title').innerText = "You pressed the Enter key! Didn't you?🤔";
        }
    });

    // Double-click secret action
    document.addEventListener('dblclick', function() {
        alert('Hooray!!! You found the secret action!🥳🥳🎉🎉');
    });
});
