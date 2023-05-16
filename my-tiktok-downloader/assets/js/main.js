/**
 * https://github.com/topics/tiktok-downloader?l=javascript
 * 
 * https://github.com/karim0sec/Bulk-Tiktoks-Downloader
 * 
 * https://github.com/n0l3r/tiktok-downloader
 * 
 * https://www.tiktok.com/@davidbeckham/video/7072710872912694534
 */


function url_checking( url ) {
  const matching = url.includes("tiktok.com");

  if(!matching){
    return false;
  }

  return true;
}


function shakib_tiktok_video_downloader() {

  let searchField = document.getElementById('searchField');
  let btnSearch = document.getElementById('btnSearch');
  let loadingInfo = document.querySelector('.loading-info');
  let loader = document.querySelector('.loading-info .loader');
  let errorMessage = document.querySelector('.loading-info .error-message');
  let videoItems = document.querySelector('.video-items');
  let topInfo = document.querySelector('.video-items .top-info');
  let itemRow = document.querySelector('.video-items .item-row');
  let itemsInner = document.querySelector('.video-items .items-inner');
  

  btnSearch.addEventListener('click', function(){

    let getURL = searchField.value;

    if( url_checking( getURL ) ){
      loadingInfo.style.display = 'block';
      loader.style.display = 'block';
      errorMessage.style.display = 'none';

      setTimeout(function(){
        loadingInfo.style.display = 'none';
        loader.style.display = 'none';
        errorMessage.style.display = 'none';

        videoItems.style.display = 'block';
      }, 2000);

      console.log('Loading...');
    }
    else{
      loadingInfo.style.display = 'block';
      errorMessage.style.display = 'block';

      videoItems.style.display = 'none';
      loader.style.display = 'none';
      console.log('URL is empty!');
    }
  });

  console.log('Loaded');

}

document.onload = shakib_tiktok_video_downloader();