"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/music-react/index.html","da1876f5bce3741d88f0307411fa4126"],["/music-react/static/css/main.3d26ffad.css","b7e3765700eae62618d2956b75409088"],["/music-react/static/js/0.5dfac00a.chunk.js","98acbdae9d36b8700ec3977aba8b54c3"],["/music-react/static/js/1.4ba991a2.chunk.js","2a5e8d8f67fc4551aefab097007e1e25"],["/music-react/static/js/10.1d644b40.chunk.js","a7a08c4d24dadf3871ee134897516f08"],["/music-react/static/js/11.f3a27896.chunk.js","6c86ff60662e46a1357abd5895677b88"],["/music-react/static/js/12.7807f202.chunk.js","0b7362de088de36e5b3016bb4479c563"],["/music-react/static/js/13.8201cf7e.chunk.js","183aa6b9af4ddcc2c8e24e6fa557eefd"],["/music-react/static/js/14.2901abe2.chunk.js","58f512dbc214dbda14454cabead296d0"],["/music-react/static/js/15.3a703403.chunk.js","d4a086a254f0405f606b3574656dce97"],["/music-react/static/js/2.b447b1b0.chunk.js","79e26cff5ac87edeb165470acb7591aa"],["/music-react/static/js/3.0a0cb5a7.chunk.js","ea03d09663e20c53ba872f1be574eedc"],["/music-react/static/js/4.a7335894.chunk.js","5b7e065dc32456ebe6bfda30959e2b1b"],["/music-react/static/js/5.cce331c9.chunk.js","6156808beee82a7e99ee42370b2685dc"],["/music-react/static/js/6.12835aa3.chunk.js","5ccdc43e045de907cdeb54771b86b431"],["/music-react/static/js/7.5374cf0c.chunk.js","00f098e218638f78ba49b8f8df645871"],["/music-react/static/js/8.ce03a540.chunk.js","b741e59949159ae4d7c3f21bd952d4e2"],["/music-react/static/js/9.1299c9cd.chunk.js","84a7baaa712f971b1eae5e8b35b4ac1f"],["/music-react/static/js/main.b56a6a5c.js","3fc60e94a7e325cc1b417b62285c6c3c"],["/music-react/static/media/icomoon.25f62eba.ttf","25f62ebad6ef48c164c35f7f6da42146"],["/music-react/static/media/icomoon.4feb0df7.svg","4feb0df7bc79ea6d47c5e026aba70374"],["/music-react/static/media/icomoon.6617b3f8.eot","6617b3f8267d25d9a680f110d5ebad95"],["/music-react/static/media/icomoon.ca475422.woff","ca475422ce696fa889d38fb1bad6e213"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),s=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));var s="/music-react/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(s,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});