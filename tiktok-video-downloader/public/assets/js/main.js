/**
 * Get Query Elements
 */
const EL = {
  searchField: document.getElementById('searchField'),
  btnSearch: document.getElementById('btnSearch'),
  loadingInfo: document.querySelector('.loading-info'),
  loader: document.querySelector('.loading-info .loader'),
  errorMessage: document.querySelector('.loading-info .error-message'),
  videoItems: document.querySelector('.video-items'),
  topInfo: document.querySelector('.video-items .top-info'),
  itemRow: document.querySelector('.video-items .item-row'),
  itemsInner: document.querySelector('.video-items .items-inner'),
  videoByID: document.querySelector('.video-by-id'),
  video_thumb: document.querySelector('.video-by-id .thumb img'),
  video_avatar: document.querySelector('.video-by-id .avatar img'),
  video_username: document.querySelector('.video-by-id .author-info h3'),
  video_desc: document.querySelector('.video-by-id .author-info p'),
  video_likes: document.querySelector('.video-by-id .video-meta .likes'),
  video_share_count: document.querySelector('.video-by-id .video-meta .share_count'),
  video_play_count: document.querySelector('.video-by-id .video-meta .play_count'),
  video_comments: document.querySelector('.video-by-id .video-meta .comments'),
  video_download_count: document.querySelector('.video-by-id .video-meta .download_count'),
  download_table_list: document.querySelector('.video-by-id .download-table ul'),
}


/**
 * Error handler
 */
const ERROR = {
  type: 'DOM',
  msg: 'Something went wrong!',
}


EL.btnSearch.addEventListener('click', function () {

  if ( EL.searchField.value ) {
    EL.loadingInfo.style.display = 'block';
    EL.loader.style.display = 'block';
    EL.errorMessage.style.display = 'none';
    EL.videoByID.style.display = 'none';

    console.log('Loading...');

    fetch(`/api`, {
      method: 'POST',
      body: JSON.stringify({
        url: EL.searchField.value
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then( ( response ) => response.json() )
      .then( (result) => {
        EL.loadingInfo.style.display = 'none';
        EL.loader.style.display = 'none';

        if( result.video_by_username ) {
          EL.loadingInfo.style.display = 'block';
          EL.errorMessage.style.display = 'block';
          EL.errorMessage.innerHTML = `<p>${result.msg}</p>`;
        }
        else{
          EL.video_thumb.setAttribute('src', result.video_thumb);

          EL.video_avatar.setAttribute('src', result.avatar[0]);
          EL.video_username.innerHTML = `@${result.username}`;
          EL.video_desc.innerHTML = result.video_desc;
          EL.video_likes.innerHTML = result.video_likes;
          EL.video_share_count.innerHTML = result.video_share_count;
          EL.video_play_count.innerHTML = result.video_play_count;
          EL.video_comments.innerHTML = result.video_comments;
          EL.video_download_count.innerHTML = result.video_download_count;

          // Remove previous list
          EL.download_table_list.innerHTML = '';

          // List without watermark
          result.video_no_watermark.map( ( item ) => {
            let li = document.createElement('li');
            let span = `<span>MP4</span><span>No Watermark</span><span><a target="_blank" download="download" href="${item}">Download</a></span>`;

            li.innerHTML = span;
          
            EL.download_table_list.appendChild( li );
          });

          // List with watermark
          let li = document.createElement('li');
          let span = `<span>MP4</span><span>Watermarked</span><span><a target="_blank" download="download" href="${result.video_watermark[0]}">Download</a></span>`;
          li.innerHTML = span;
          EL.download_table_list.appendChild( li );

          // List mp3 audio
          let liMP3 = document.createElement('li');
          let spanMP3 = `<span>♫ Audio</span><span>${result.video_music_title}</span><span><a target="_blank" download="downloaded-file" href="${result.video_music_url}">Download</a></span>`;
          liMP3.innerHTML = spanMP3;
          EL.download_table_list.appendChild( liMP3 );

          EL.videoByID.style.display = 'block';

          console.log(result);
        }
      });
  }
  else {
    EL.loader.style.display = 'none';

    ERROR.type = 'URL_Empty';
    ERROR.msg = 'Something went wrong!';

    EL.loadingInfo.style.display = 'block';
    
    EL.errorMessage.innerHTML = `<p>${ERROR.msg}</p>`;
    EL.errorMessage.style.display = 'block';

    EL.videoItems.style.display = 'none';
    EL.videoByID.style.display = 'none';

    console.log(ERROR);
  }
});

console.log('Done');