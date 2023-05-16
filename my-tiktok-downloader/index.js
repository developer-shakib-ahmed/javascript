/**
 * Title: My Tiktok Video Downloader
 * 
 * Date: April 18, 2023
 */

// Dependencies
const fetch = require("node-fetch");
const {Headers} = require('node-fetch');



const headers = new Headers();

headers.append('User-Agent', 'TikTok 26.2.0 rv:262018 (iPhone; iOS 14.4.2; en_US) Cronet');



const getIdVideo = (url) => {
  const matching = url.includes("/video/")
  if(!matching){
    console.log(chalk.red("[X] Error: URL not found"));
    exit();
  }
  const idVideo = url.substring(url.indexOf("/video/") + 7, url.length);

  return (idVideo.length > 19) ? idVideo.substring(0, idVideo.indexOf("?")) : idVideo;
}



const getVideoNoWM = async (url) => {
  const idVideo = await getIdVideo(url)
  const API_URL = `https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${idVideo}`;
  const request = await fetch(API_URL, {
    method: "GET",
    headers : headers
  });

  const body = await request.text();

  try {
    var res = JSON.parse(body);
  } catch (err) {
    console.error("Error:", err);
    console.error("Response body:", body);
  }
  const urlMedia = res.aweme_list[0].video.play_addr.url_list[0]
  const data = {
    url: urlMedia,
    id: idVideo
  }
  return data
}



(async () => {

  console.log('Loading...');

  var data = await getVideoNoWM('https://www.tiktok.com/@davidbeckham/video/7072710872912694534');

  console.log(data);

  console.log('|---- Done ----|');

})();