const express = require('express');

const { getVideoNoWM } = require('../api/tiktokApi');
const { checkURL } = require('../middlewares/common/urlChecker');

const router = express.Router();

router.post('/', async ( req, res, next ) => {

  var url = req.body.url;

  var urlData = checkURL( url );

  if( urlData.url_type === 'video_by_id' ) {
    var data = await getVideoNoWM( urlData.video_id );
    res.send(data);
  }

  if( urlData.url_type === 'video_by_username' ) {
    res.send({
      'video_by_username': true,
      'msg': 'Video by Username Feature Coming Soon...',
    });
  }
 
});

module.exports = router;