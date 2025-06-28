'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d54ecc7fd1ffc9665a410ea02490cf67",
"assets/AssetManifest.bin.json": "738db1acfb3216facd96874f3597413c",
"assets/AssetManifest.json": "347567b573eab3bc31ca61de7561786e",
"assets/assets/addbtn.png": "f92452a171c821fd716ff476b86b8612",
"assets/assets/facebook.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/images/2.png": "b71b1e866074a46ace69f60d83a8ae5d",
"assets/assets/images/3.png": "1657eb18c7adb431d11905ec6fb131d5",
"assets/assets/images/4.png": "3145290c35c974a53e865a441f80e186",
"assets/assets/images/5.png": "92ed69845b0c5afe60ecef976eb36a00",
"assets/assets/images/6.png": "1423fe96ef411101097f32acc4d7ecd1",
"assets/assets/images/7.png": "ffe093a5849d0f08a1531e9e241a0e0e",
"assets/assets/images/8.png": "f2900623e7d3b04ddb5af687ff2d01c7",
"assets/assets/images/com-rent.png": "8d0e72eb4b78072cf8b5b9d37dc18584",
"assets/assets/images/com-sale.png": "6b2246dfcd161b61d3b766c6718c7080",
"assets/assets/images/flat-rent.png": "4c59f27e8a918a8a7d951457e39cfe0c",
"assets/assets/images/flat-sale.png": "98274dbe53f271c448a575f866fa654b",
"assets/assets/images/logo.png": "99e5161c6baa397a84246ff1ce6b36eb",
"assets/assets/images/plot-rent.png": "4bd88417ffc33c9281f081487b0ff0b4",
"assets/assets/images/plot-sale.png": "4d2aec0ae04388d0378ec8e12031eb00",
"assets/assets/images/real_bg_1.png": "247814d388aea06744d95c7297273596",
"assets/assets/images/villa-rent.png": "7ba6057205739c9ea3931ae46e07918b",
"assets/assets/insta.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"assets/assets/nodatafound.png": "248ef50c0361053ebe7269460031a4dc",
"assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bfeb954aa90916d50368c28d2ee10d31",
"assets/NOTICES": "e09d00b06ca7d790958c54b007248de2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
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
"favicon.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "5fa2875e8fc93aad282e581d767babd1",
"icons/Icon-192.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"icons/Icon-512.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"icons/Icon-maskable-192.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"icons/Icon-maskable-512.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"index.html": "daa5f4a526350afa09cacb4f56a4de68",
"/": "daa5f4a526350afa09cacb4f56a4de68",
"logo.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"main.dart.js": "5e2a860e253ea08814c2547c06ae5a46",
"manifest.json": "59680f023ee5f78cc986bf8f69dfcdb9",
"og-image.png": "18564495d08cd086935a645f635fa011",
"SquareCent/.git/COMMIT_EDITMSG": "26fa3c6d7f92234c9c1dbd7611ed41de",
"SquareCent/.git/config": "73e4bb1e1733cdd1114be5b13f5e8a42",
"SquareCent/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"SquareCent/.git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"SquareCent/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"SquareCent/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"SquareCent/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"SquareCent/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"SquareCent/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"SquareCent/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"SquareCent/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"SquareCent/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"SquareCent/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"SquareCent/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"SquareCent/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"SquareCent/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"SquareCent/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"SquareCent/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"SquareCent/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"SquareCent/.git/index": "4a37b8c02a31f5b1fe4854819357e916",
"SquareCent/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"SquareCent/.git/logs/HEAD": "b6a8dff91aca567a08d2e59136dbb367",
"SquareCent/.git/logs/refs/heads/main": "b6a8dff91aca567a08d2e59136dbb367",
"SquareCent/.git/logs/refs/remotes/origin/HEAD": "7dbcce1af8edf5e535073e785155a1e3",
"SquareCent/.git/logs/refs/remotes/origin/main": "5ce49d1150d5a7ea6a36c4a444947d98",
"SquareCent/.git/objects/27/efb2e6502f0915f8bafd44636498719b7fbd2c": "2a2f0e2ea3ad2f7589a0649a38cfb7fb",
"SquareCent/.git/objects/34/458d29570e406e07bb2bc202a0ae5da93dc2b2": "afea0fb7a8ff6c9f509900718ddd33b2",
"SquareCent/.git/objects/61/26aca865042b76115b61f15ebf4d8cbd3ac20c": "f540b39b904de23e98c6a12790ee2467",
"SquareCent/.git/objects/c0/802db5f3894a09d65712dfd3c2edafdb29cd66": "449a6c5bc741984aed96824b88d00913",
"SquareCent/.git/objects/d9/781c174f57a5b62fc077ac4f26808ed6ac3800": "bab3afcdc8d2e3fd4d31bbe234ab5f9e",
"SquareCent/.git/objects/da/04b76a3fe31439ef54d546a17a4dbcd0114b8a": "6c165d26448a711a1bac9257033064e8",
"SquareCent/.git/objects/pack/pack-125b140b7202746a06cdd2fde3da495cbf8bea0f.idx": "be35b8c78860cef09280c4e7af1f3dee",
"SquareCent/.git/objects/pack/pack-125b140b7202746a06cdd2fde3da495cbf8bea0f.pack": "18ce78716db943dea2fcfc5747b2660f",
"SquareCent/.git/objects/pack/pack-125b140b7202746a06cdd2fde3da495cbf8bea0f.rev": "e77ea5c9658fe7b296dfbba9e1a0b42e",
"SquareCent/.git/packed-refs": "cb06f563e59c0144827afecb0f111102",
"SquareCent/.git/refs/heads/main": "73f6855ee1787be060700bc27f18c3ef",
"SquareCent/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"SquareCent/.git/refs/remotes/origin/main": "73f6855ee1787be060700bc27f18c3ef",
"SquareCent/assets/AssetManifest.bin": "d54ecc7fd1ffc9665a410ea02490cf67",
"SquareCent/assets/AssetManifest.bin.json": "738db1acfb3216facd96874f3597413c",
"SquareCent/assets/AssetManifest.json": "347567b573eab3bc31ca61de7561786e",
"SquareCent/assets/assets/addbtn.png": "f92452a171c821fd716ff476b86b8612",
"SquareCent/assets/assets/facebook.png": "8c89ef8ab45d47ae9a954822532889f7",
"SquareCent/assets/assets/images/2.png": "b71b1e866074a46ace69f60d83a8ae5d",
"SquareCent/assets/assets/images/3.png": "1657eb18c7adb431d11905ec6fb131d5",
"SquareCent/assets/assets/images/4.png": "3145290c35c974a53e865a441f80e186",
"SquareCent/assets/assets/images/5.png": "92ed69845b0c5afe60ecef976eb36a00",
"SquareCent/assets/assets/images/6.png": "1423fe96ef411101097f32acc4d7ecd1",
"SquareCent/assets/assets/images/7.png": "ffe093a5849d0f08a1531e9e241a0e0e",
"SquareCent/assets/assets/images/8.png": "f2900623e7d3b04ddb5af687ff2d01c7",
"SquareCent/assets/assets/images/com-rent.png": "8d0e72eb4b78072cf8b5b9d37dc18584",
"SquareCent/assets/assets/images/com-sale.png": "6b2246dfcd161b61d3b766c6718c7080",
"SquareCent/assets/assets/images/flat-rent.png": "4c59f27e8a918a8a7d951457e39cfe0c",
"SquareCent/assets/assets/images/flat-sale.png": "98274dbe53f271c448a575f866fa654b",
"SquareCent/assets/assets/images/logo.png": "99e5161c6baa397a84246ff1ce6b36eb",
"SquareCent/assets/assets/images/plot-rent.png": "4bd88417ffc33c9281f081487b0ff0b4",
"SquareCent/assets/assets/images/plot-sale.png": "4d2aec0ae04388d0378ec8e12031eb00",
"SquareCent/assets/assets/images/real_bg_1.png": "247814d388aea06744d95c7297273596",
"SquareCent/assets/assets/images/villa-rent.png": "7ba6057205739c9ea3931ae46e07918b",
"SquareCent/assets/assets/insta.png": "5c570427ee23f69853d28aec805eee79",
"SquareCent/assets/assets/linkedin.png": "d492efc706db983e74258dbd348f2208",
"SquareCent/assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"SquareCent/assets/assets/nodatafound.png": "248ef50c0361053ebe7269460031a4dc",
"SquareCent/assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"SquareCent/assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"SquareCent/assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"SquareCent/assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"SquareCent/assets/bg/login.jpg": "ab05700b34a8e45d2910fb16d02e9946",
"SquareCent/assets/bg/map.jpg": "1a239302dd0313db46a9d95c8f1c3bfb",
"SquareCent/assets/bg/site.png": "d8e51e99a35f88c1ece62bcaf6339d0e",
"SquareCent/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"SquareCent/assets/fonts/MaterialIcons-Regular.otf": "bfeb954aa90916d50368c28d2ee10d31",
"SquareCent/assets/NOTICES": "e09d00b06ca7d790958c54b007248de2",
"SquareCent/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"SquareCent/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"SquareCent/assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"SquareCent/assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"SquareCent/assets/packages/wakelock_web/assets/no_sleep.js": "9c3aa3cd0b217305aa860decab3d9f42",
"SquareCent/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"SquareCent/canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"SquareCent/canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"SquareCent/canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"SquareCent/canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"SquareCent/canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"SquareCent/canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"SquareCent/canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"SquareCent/canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"SquareCent/canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"SquareCent/canvaskit/skwasm.worker.js": "b31cd002f2ed6e6d27aed1fa7658efae",
"SquareCent/favicon.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"SquareCent/flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"SquareCent/flutter_bootstrap.js": "beeb64dbcef8979e6f84dafba6954be1",
"SquareCent/icons/Icon-192.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"SquareCent/icons/Icon-512.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"SquareCent/icons/Icon-maskable-192.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"SquareCent/icons/Icon-maskable-512.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"SquareCent/index.html": "61f204bb2bed8f334156706f4787e31c",
"SquareCent/logo.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"SquareCent/main.dart.js": "003675d10989c8d67805fe5f90d374aa",
"SquareCent/manifest.json": "59680f023ee5f78cc986bf8f69dfcdb9",
"SquareCent/og-image.png": "18564495d08cd086935a645f635fa011",
"SquareCent/version.json": "2b04f4dd17f41ab45ea8ed44bfea692a",
"version.json": "2b04f4dd17f41ab45ea8ed44bfea692a"};
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
