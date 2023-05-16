/**
 * URL Checker
 */
const checkURL = (url) => {
  const urlData = {
    url_type: "invalid_url"
  }

  if( url.includes("/video/") ) {
    urlData.url_type = "video_by_id";

    const idVideo = url.substring(url.indexOf("/video/") + 7, url.length);

    urlData.video_id = (idVideo.length > 19) ? idVideo.substring(0, idVideo.indexOf("?")) : idVideo;
  }
  else if( url.includes("@") ) {
    urlData.url_type = "video_by_username";

    var getUsername = url.substring( url.indexOf("@") );

    urlData.username = getUsername.replaceAll("/", "");
  }

  return urlData;
}


module.exports = {
  checkURL
}