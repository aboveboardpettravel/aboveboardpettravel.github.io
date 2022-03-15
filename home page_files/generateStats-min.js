var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

S123.websiteStatistics = new (function() {var ws = this;var timestamp = '';this.init = function() {ws.data = {};timestamp = +new Date();ws.trackTimeSpentInit();var req = window.location;var path = req.pathname + req.search;if ( !path ) {path = '/';}
var hostname = req.protocol + '//' + req.hostname;
ws.data.id = ws.randomString(20);ws.data.hn = hostname;ws.data.pt = path;ws.data.t = document.title;ws.data.wID = $('#websiteID').val();ws.data.tm = timestamp;ws.data.rf = document.referrer;ws.data.mNUM = '';if ( $('#moduleTypeNUM').length !== 0 ) {ws.data.mNUM = $('#moduleTypeNUM').val();}
ws.data.dv = ws.getUserDevice();ws.data.screenRes = screen.width + 'X' + screen.height;var data = ws.getData();ws.data.uq = data.pagesViewed.indexOf(path) == -1 ? 1 : 0;ws.data.nvs = data.isNewVisitor ? 1 : 0;ws.data.ns = data.isNewSession ? 1 : 0;ws.data.pid = data.previousPageviewId || '';ws.data.sid = data.sid;ws.action = 'save';ws.saveStatistics(data, 'save');};this.trackTimeSpentInit = function() {var start = new Date();$(document).off('s123.pjax.send').on('s123.pjax.send', function( event ) {ws.trackTimeSpent(start);});window.onbeforeunload = function() {ws.trackTimeSpent(start);};};this.trackTimeSpent = function( start ) {var end = new Date();ws.data.time_spent = Math.floor((end.getTime() - start.getTime()) / 1000);ws.data.is_finished = 1;ws.saveStatistics(null, 'update');};this.saveStatistics = function( data, action ) {var url = new URL('https://web.archive.org/web/20220114233335/https://analytics.site123.io/versions/2/wizard/statistics/classes/Router.php');
url.search = 'action=save&' +  $.param(ws.data);fetch(url,{method: 'get',keepalive: action === 'update' ? false : true,}).then( (response) => {if ( data ) {let now = new Date();let expiresStats = new Date(now.getTime() + (24 * 60 * 60 * 1000));data.previousPageviewId = ws.data.id;data.isNewVisitor = false;data.isNewSession = false;data.timestamp = timestamp;ws.setCookie('_website_stats', JSON.stringify(data), {expires: expiresStats,path: '/',});}});};this.stringifyObject = function(obj) {var keys = Object.keys(obj);return ('?' +keys
.map(function(k) {return (encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]));})
.join('&'));};this.randomString = function(n) {var s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';return Array(n)
.join()
.split(',')
.map(function() {return s.charAt(Math.floor(Math.random() * s.length));})
.join('');};this.getCookie = function(name) {var cookies = document.cookie ? document.cookie.split('; ') : [];for (var i = 0; i < cookies.length; i++) {var parts = cookies[i].split('=');if ( decodeURIComponent(parts[0]) !== name ) continue;var cookie = parts.slice(1).join('=');return decodeURIComponent(cookie);}
return '';};this.setCookie = function(name, data, args) {name = encodeURIComponent(name);data = encodeURIComponent(String(data));var str = name + '=' + data;if ( args.path ) {str += ';path=' + args.path;}
if ( args.expires ) {str += ';expires=' + args.expires;}
document.cookie = str;};this.newVisitorData = function() {return {isNewVisitor: true,isNewSession: true,pagesViewed: [],previousPageviewId: '',timestamp: timestamp,sid: ws.uniqid('st-')};};this.uniqid = function(prefix, more_entropy) {if (typeof prefix === 'undefined') prefix = '';var retId;var formatSeed = function (seed, reqWidth) {seed = parseInt(seed, 10).toString(16);if (reqWidth < seed.length) {return seed.slice(seed.length - reqWidth);}
if (reqWidth > seed.length) {return Array(1 + (reqWidth - seed.length)).join('0') + seed;}
return seed;};if (!this.php_js) {this.php_js = {};}
if (!this.php_js.uniqidSeed) {this.php_js.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);}
this.php_js.uniqidSeed++;retId = prefix;retId += formatSeed(parseInt(new Date().getTime() / 1000, 10), 8);retId += formatSeed(this.php_js.uniqidSeed, 5);if (more_entropy) {retId += (Math.random() * 10).toFixed(8).toString();}
return retId;}
this.getData = function() {let thirtyMinsAgo = new Date();thirtyMinsAgo.setMinutes(thirtyMinsAgo.getMinutes() - 30);let data = ws.getCookie('_website_stats');if ( !data ) {data = ws.newVisitorData();}
try {data = JSON.parse(data);} catch (e) {data = ws.newVisitorData();}
if ( data.timestamp < +thirtyMinsAgo ) {data.isNewSession = true;}
return data;};this.getUserDevice = function() {var userAgent = navigator.userAgent;if (userAgent.match(/Android/i)) {return 'Mobile';}
if (userAgent.match(/BlackBerry/i)) {return 'Mobile';}
if (userAgent.match(/iPhone/i)) {return 'Mobile';}
if (userAgent.match(/iPad/i)) {return 'Tablet';}
if (userAgent.match(/iPod/i)) {return 'Mobile';}
if (userAgent.match(/Opera Mini/i)) {return 'Mobile';}
if (userAgent.match(/IEMobile/i)) {return 'Mobile';}
if (userAgent.match(/Macintosh/i)) {return 'Desktop';}
if (userAgent.match(/Windows/i)) {return 'Desktop';}
return 'Unknown Device';};})();jQuery(function($) {S123.websiteStatistics.init();$(document).on('s123.pjax.complete', function(event) {S123.websiteStatistics.init();});});

}
/*
     FILE ARCHIVED ON 23:33:35 Jan 14, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:33:42 Mar 15, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 336.289
  exclusion.robots: 0.075
  exclusion.robots.policy: 0.069
  RedisCDXSource: 0.56
  esindex: 0.007
  LoadShardBlock: 316.251 (3)
  PetaboxLoader3.datanode: 158.671 (5)
  CDXLines.iter: 16.198 (3)
  load_resource: 176.336 (2)
  PetaboxLoader3.resolve: 141.962 (2)
*/