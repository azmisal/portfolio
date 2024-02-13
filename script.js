document.getElementById('cvDownload').addEventListener('click', function () {
    var link = document.createElement('a');
    link.href = 'Assets/Resume.pdf'; 
    link.download = 'Resume.pdf';
    link.click();
});
  
