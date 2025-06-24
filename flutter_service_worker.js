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
"flutter_bootstrap.js": "404a264bf722d22b967c13524b02b27d",
"icons/Icon-192.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"icons/Icon-512.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"icons/Icon-maskable-192.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"icons/Icon-maskable-512.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"index.html": "322e63ce0781f10ac30acb89956f412a",
"/": "322e63ce0781f10ac30acb89956f412a",
"logo.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"main.dart.js": "65486afd88d7551f0119f20dd2488380",
"manifest.json": "59680f023ee5f78cc986bf8f69dfcdb9",
"og-image.png": "18564495d08cd086935a645f635fa011",
"SquareCent/.git/COMMIT_EDITMSG": "54cd1eb655dd4f5ee6410c4fd4a9c53a",
"SquareCent/.git/config": "408c790f84b8d003ca1a83aa85f3aff7",
"SquareCent/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"SquareCent/.git/FETCH_HEAD": "fb0b19df1ce6ce5654b8804141b85f7c",
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
"SquareCent/.git/index": "6d4daa0b208f4085d8c2674199aba648",
"SquareCent/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"SquareCent/.git/logs/HEAD": "f3129726340f87a5a297e1cf4287aaeb",
"SquareCent/.git/logs/refs/heads/main": "f3129726340f87a5a297e1cf4287aaeb",
"SquareCent/.git/logs/refs/remotes/origin/HEAD": "8c829fdcfe3896f22381e64011cfc49a",
"SquareCent/.git/logs/refs/remotes/origin/main": "1d7660db94f94cc723dacc64af0082e6",
"SquareCent/.git/objects/00/6cc6f9013701cd94ac040c3d0e96215f139a73": "5bbd75c9dc4f74db57d7569bc84143e6",
"SquareCent/.git/objects/01/7447ff0d5ba0daaec5a939803497535d0661bd": "12ca108aa5fe8be98ad82d7ccc7096b2",
"SquareCent/.git/objects/0d/ce47715149557660b21d30e861f414092ccdbc": "1569edbd1a7766abfd9f245fd87d18fb",
"SquareCent/.git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "c224d16fe69d48663a961825ab08bb0b",
"SquareCent/.git/objects/2b/5c0a437d3509289d020d787fbe49356b7fe452": "b53fbcc7bb8a9eade407c91efaa8d8a0",
"SquareCent/.git/objects/2f/b37e5fb3bc8433692bcf2b5eab497c7bd40ea8": "3586ae529a4299a988ca518ac5a200b5",
"SquareCent/.git/objects/34/2f226474c3558b0acc5ab64c886397c2bb6faa": "f452aaed54e900cfca800494d77494a3",
"SquareCent/.git/objects/48/1c13d3118417fbcf5dd141b16afc9c6d4ccaaa": "9ac0ec8bf8d2c339efa26e6cbb8a8266",
"SquareCent/.git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "2eea3d52cb5524f7009f9e95a259eeb2",
"SquareCent/.git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "8b3e4ca66c487684d03fb29c70fefbf1",
"SquareCent/.git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "0b86715160e6f64f628d3d3b7c64bc1b",
"SquareCent/.git/objects/56/9c047df2bb232a23fc7ecc4df64dc0cea9eeab": "4f2c64a1bad09b05d97108b4a18d9252",
"SquareCent/.git/objects/66/f68c0def5bfc998d1ea6a3c1b7301d95d186c0": "625b75b05975ecb8ed840d3baba452a0",
"SquareCent/.git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "fae60530fa427e7dee065140e85f4339",
"SquareCent/.git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "675fb59ecbf118b82d6912b19ea6cbf1",
"SquareCent/.git/objects/72/8eebef57947354d207ed2da05edca3184e27a7": "8b7909cf7b7d83abf179e49629960e20",
"SquareCent/.git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "ba717a2ffd20992ad3a6345f7496888a",
"SquareCent/.git/objects/87/41dbf7a7771d5953d4da34941078d6b7db8495": "f6b1733b5b67e34df993cc695b5204f8",
"SquareCent/.git/objects/88/90a5f10b903370f0289542ae81673f63625778": "b49a408e8e248abbf3ff85f16a47e5f4",
"SquareCent/.git/objects/90/2e220a53a622344f2c26d3f4e558624f1b0b5f": "9f204f4ef0d9b06c0c994cdde79839ad",
"SquareCent/.git/objects/90/faee959f0e1dffe02c67bfd16db3b145ac9a8b": "81d4b2bb5ff639e4b202390323e0c586",
"SquareCent/.git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "82a54dbd9be4e9c5a8843ac17c1592de",
"SquareCent/.git/objects/a8/f2b91565fc93d299d0f7540f5ac048dc1b9028": "9d7c2c88927f4bdc607bc685075848b5",
"SquareCent/.git/objects/ae/08edbf2cc9105f0152d7e6b59537d809f63ac5": "f3316d26448743bb7e29a0ec4fdff46c",
"SquareCent/.git/objects/b7/046be9cb9de5254da66032f9e99b2402162447": "bcce0fda0073151c2635d05618389a9a",
"SquareCent/.git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "428a4edb52ecd286497311f863fe0655",
"SquareCent/.git/objects/be/6be789fc9eb8b06fbd282704da25e7f5151086": "b434ea388f6aba27ac0fadba5eef6308",
"SquareCent/.git/objects/c2/4a19d1879fe0b7398b9800d8b04b9cee00f642": "73ec00c1c85d466ba693ca31efb1f64d",
"SquareCent/.git/objects/c6/71b6e170b0066897d252c92536cb3e528d7122": "c4953df4a2bb7b838d0f3f34a5042e1d",
"SquareCent/.git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "f647fc3d553ae429d751a2e73d60ecfe",
"SquareCent/.git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "78b3a709f531a50ad7207eaac9279372",
"SquareCent/.git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "239072de7f67c2c2ea9210561575948f",
"SquareCent/.git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "1dfabeb9b2b507b75367586cb7fb284d",
"SquareCent/.git/objects/ef/81a29fb92fc838f07a9ef11bec1398cbbd16bb": "25995d9891892582a7a838cac76f2a1e",
"SquareCent/.git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "db8c57f684c1c1d7e3892a31f31bd1ff",
"SquareCent/.git/objects/f6/d21a8fb325584f7e998d4304e417d87e9b2003": "50b7d99cd6fed51275fd4f8dcc120165",
"SquareCent/.git/objects/pack/pack-a39f5feabc8ca1b18d8b024e1794cce19631f224.idx": "746ec68a9f54bb6d18d056a0fd96119f",
"SquareCent/.git/objects/pack/pack-a39f5feabc8ca1b18d8b024e1794cce19631f224.pack": "8da3c27d46fcf0d247442bcf097f78b3",
"SquareCent/.git/objects/pack/pack-a39f5feabc8ca1b18d8b024e1794cce19631f224.rev": "7369a3c203dcd8e83814fb8ba8cd2eb1",
"SquareCent/.git/packed-refs": "c18a9101e2003aa3298858b622f51b85",
"SquareCent/.git/refs/heads/main": "dbb3c0caf7fe6e88c22b69439cc164b0",
"SquareCent/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"SquareCent/.git/refs/remotes/origin/main": "dbb3c0caf7fe6e88c22b69439cc164b0",
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
"SquareCent/flutter_bootstrap.js": "150a4eb00ea4ec00994d7651b0311cb7",
"SquareCent/icons/Icon-192.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"SquareCent/icons/Icon-512.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"SquareCent/icons/Icon-maskable-192.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"SquareCent/icons/Icon-maskable-512.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"SquareCent/index.html": "15b3b55206b8cd8414516552fa7b6b0e",
"SquareCent/logo.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"SquareCent/main.dart.js": "f57a001e87fadb9349deceef9029b4af",
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
