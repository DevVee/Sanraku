document.addEventListener('DOMContentLoaded', function () {
  // Get the image element by its ID
  var image = document.querySelector('.manga1');

  // Add a click event listener to the image
  image.addEventListener('click', function () {
    // Redirect to another HTML file (replace 'otherfile.html' with your desired file)
    window.location.href = 'read.html';
  });
});
