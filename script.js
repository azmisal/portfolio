document.getElementById('cvDownload').addEventListener('click', function () {
    var link = document.createElement('a');
    link.href = 'Assets/Resume.pdf'; 
    link.download = 'Resume.pdf';
    link.click();
});
  
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("Form submitted!"); 
});
