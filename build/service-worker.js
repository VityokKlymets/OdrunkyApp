"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","91a9bd72ef7845a60f0f52bbc02fef61"],["/static/css/main.d3cc4c38.css","af5781a3f303e6f48cdcff09f34e9bcc"],["/static/js/main.8a56d91e.js","f466ab3b5a428e0f174d93ae50a1de9c"],["/static/media/DSCN3385.d36319f2.jpg","d36319f24e3c593468f0d2a9a93bf5bd"],["/static/media/DSCN3530.6c71b641.jpg","6c71b641532cef7fb18fa4344b451e21"],["/static/media/elizabet-olsen-elizabeth-2203.464c5a3c.jpg","464c5a3c0cddccf1c9c303ccb00d21c3"],["/static/media/ic_add_48px.45a0a5e5.svg","45a0a5e5ae80bd4e3b65d211b4b20145"],["/static/media/ic_business_center_48px.def05a3f.svg","def05a3fb4d9300e42e831d5d3f7f0e7"],["/static/media/ic_chevron_left_48px.5bbac221.svg","5bbac221cc6babbb640b1dfe9e874ebb"],["/static/media/ic_chevron_right_48px.c042f731.svg","c042f731c51550ee074d4323c4fdd9b1"],["/static/media/ic_clear_48px.a15a5733.svg","a15a57337ee5ae04c5834bc20fe7eb88"],["/static/media/ic_create_48px.adbed34a.svg","adbed34aeb7a6fb5fe29273af32a50fa"],["/static/media/ic_delete_forever_48px.40996f36.svg","40996f369a0f088e1c4ba0ff14eceb92"],["/static/media/ic_highlight_off_48px.e0540530.svg","e05405308400aee80d7285546e4c405f"],["/static/media/ic_people_48px.6dbd342c.svg","6dbd342cf4f9e25ba96ab473e005920b"],["/static/media/ic_school_48px.a0db8a45.svg","a0db8a45ff3cd477e568bddcc8561924"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});