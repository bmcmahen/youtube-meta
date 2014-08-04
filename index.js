var getId = require('youtube-id');
var loadScript = require('load-script');

/**
 * Load Meta
 * @param  {String}   url 
 * @param  {Function} fn  callback
 */

module.exports = function(url, fn){
  var id = getId(url);

  window._youtubeFeedCallback = function(json){
    if (fn) fn(json.data);
  };

  loadScript('http://gdata.youtube.com/feeds/api/videos/'+ id +'?v=2&alt=jsonc&callback=_youtubeFeedCallback');
};