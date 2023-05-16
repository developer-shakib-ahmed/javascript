// let url = 'https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=7072710872912694534';

let url = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(url, {
  headers: new Headers({
    'Origin': location.origin
  }),
  mode: 'cors'
})
  .then( (response) => response.json() )
  .then( (json) => {
    console.log(json)
  });

console.log('Loading...');