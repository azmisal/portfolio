document.getElementById('cvDownload').addEventListener('click', function () {
    var link = document.createElement('a');
    link.href = 'Assets/Resume.pdf'; 
    link.download = 'Resume.pdf';
    link.click();
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            // Optionally, you can reset the form here
        }, function(error) {
            console.log('FAILED...', error);
            alert('Message sending failed.');
        });
});
);
