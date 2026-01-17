'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eb4f754d530a7707efb71086446ef6cd",
"assets/AssetManifest.bin.json": "a0f4c14a71bf231aa44a8cece029bc73",
"assets/AssetManifest.json": "f36c714b1e947b218a4002175260764a",
"assets/assets/audio/AABBCB.m4a": "10303a958c914a2a1367e0258ab2cdd6",
"assets/assets/audio/AABBCC.m4a": "5e39a8a27bb5887c6649a4310815c517",
"assets/assets/audio/AABBCCDD.m4a": "8a5e1cfd7f86a76f9d1171d54d7790e4",
"assets/assets/audio/AABC.m4a": "69b7e9f8311a98af3c9facd56f3d8e2f",
"assets/assets/audio/AABCBB.m4a": "02c70dd216b28bad9e2306771f31658e",
"assets/assets/audio/AABCBC.m4a": "5ba39c795ee45ae633268914b433219c",
"assets/assets/audio/AABCBDCA.m4a": "cc9bcb08588601c368f395740874e97f",
"assets/assets/audio/ABAB.m4a": "34c4e610a0c28ff227fbd476832ab335",
"assets/assets/audio/ABAC.m4a": "6d2727b29acf78b3122538abde63034a",
"assets/assets/audio/ABACBCDA.m4a": "0a41f311c3defe76208480d3dc8fe38b",
"assets/assets/audio/ABACBDCB.m4a": "bd2dee171e62c0a6e021e618a4936df2",
"assets/assets/audio/ABACBDCD.m4a": "763e52d1d720d151184a5e36c15fb561",
"assets/assets/audio/ABBACA.m4a": "53307631686d4d4c3bfa2c5d1fefd08c",
"assets/assets/audio/ABCA.m4a": "a9ddad44b837549c2ac828aaaf306a18",
"assets/assets/audio/ABCABC.m4a": "603f3aac817158a25d823c97019d901e",
"assets/assets/audio/ABCACB.m4a": "2ad0ba5117c7d630528365be4b10e0ff",
"assets/assets/audio/ABCB.m4a": "df2d881627a401c9846fd62d84c7ced9",
"assets/assets/audio/ABCBACDC.m4a": "c351ea122440783518c1b57898a13d21",
"assets/assets/audio/ABCC.m4a": "e2a8d3fc59c9de86d23c58ef6e7597de",
"assets/assets/audio/ABCCBA.m4a": "cb74f535659e64dbbcff1848d3472017",
"assets/assets/audio/ABCDABCD.m4a": "383eb2846e2d0cf770800c30451cfa68",
"assets/assets/audio/ABCDBCDA.m4a": "0b457de830073bb9af75d645b9e29d6a",
"assets/assets/audio/ABCDCEAB.m4a": "a94920d8edcb2173581dbb16c67661ed",
"assets/assets/audio/ABCDEFAB.m4a": "6bf50b5f082874e9899469f4de95fcbb",
"assets/assets/audio/beep.mp3": "aab3f7ea62c83e31318d25e661823773",
"assets/assets/audio/README.md": "838c804dae38d4231fd39ff84855bb68",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ed78026cf647663043010ec5d0f70ad7",
"assets/NOTICES": "e484c1ab84b5d6bcca98505e65fb0da1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "08c9cbfde54ba32b286f5a21dca5f834",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "808e50f208104d30859e85ca50d829cf",
"/": "808e50f208104d30859e85ca50d829cf",
"main.dart.js": "8a3a7e12aff4e798cf085255c4181d79",
"manifest.json": "f5bccbd7b8ee30086fee730a2205e4cd",
"version.json": "6d91d1352f37f241b4ba82fe315603c8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
