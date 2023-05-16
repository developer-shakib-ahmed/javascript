// Dependencies
const fetch = require("node-fetch");
const {Headers} = require("node-fetch");


const headers = new Headers();

headers.append('User-Agent', 'TikTok 26.2.0 rv:262018 (iPhone; iOS 14.4.2; en_US) Cronet');


const getVideoNoWM = async (idVideo) => {

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

  const resData = {
    videoInfo: res.aweme_list[0].video,
    videoAuthor: res.aweme_list[0].author,
    videoMusic: res.aweme_list[0].added_sound_music_info,
    videoMeta: res.aweme_list[0].statistics,
  }

  const data = {
    username: resData.videoAuthor.unique_id,
    fullname: resData.videoAuthor.nickname,
    custom_verify: resData.videoAuthor.custom_verify,
    avatar: resData.videoAuthor.avatar_300x300.url_list,
    video_info: resData.videoInfo,
    video_watermark: resData.videoInfo.download_addr.url_list,
    video_no_watermark: resData.videoInfo.play_addr.url_list,
    video_likes: resData.videoMeta.digg_count,
    video_comments: resData.videoMeta.comment_count,
    video_play_count: resData.videoMeta.play_count,
    video_share_count: resData.videoMeta.share_count,
    video_download_count: resData.videoMeta.download_count,
    video_desc: res.aweme_list[0].desc,
    video_thumb: resData.videoInfo.cover.url_list[0],
    video_music: resData.videoMusic,
    video_music_title: resData.videoMusic.title,
    video_music_url: resData.videoMusic.play_url.url_list[0],
  }

  return data
}


module.exports = {
  getVideoNoWM
}