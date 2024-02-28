
// middle section button
document.getElementById('playAllVideos').addEventListener('click', function() {
    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
      video.play();
    });
  });



  //auto scroll play on 
  window.addEventListener('scroll', function() {
    var videoSection = document.getElementById('videoSection');
    var button = document.getElementById('playAllVideos');
    var rect = videoSection.getBoundingClientRect();

    console.log('rect.top: ', rect.top);
    console.log('rect.bottom: ', rect.bottom);
    // Check if the video section is in the viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      // Simulate a click event on the button
      button.click();
      // Remove the scroll event listener to prevent multiple clicks
      window.removeEventListener('scroll', arguments.callee);
    }
  });