// scripts.js

// Function to handle photo upload
document.getElementById('photoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imgElement = document.getElementById('uploadedPhoto');
        imgElement.src = e.target.result; // Set the source to the uploaded image
        imgElement.style.display = 'block'; // Show the image
    };

    if (file) {
        reader.readAsDataURL(file); // Read the uploaded file
    }
});
// Function to handle photo upload
document.getElementById('photoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imgElement = document.getElementById('uploadedPhoto');
        imgElement.src = e.target.result; // Set the source to the uploaded image
        imgElement.style.display = 'block'; // Show the image
    };

    if (file) {
        reader.readAsDataURL(file); // Read the uploaded file
    }
});
