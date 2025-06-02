'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "166bd14e0bfd7051171737626afca350",
"assets/AssetManifest.bin.json": "d1bfb0c563242950f8f42711d53f0abd",
"assets/AssetManifest.json": "fe51d25b6a116e2c46fab9a6da6d70a1",
"assets/assets/addbtn.png": "f92452a171c821fd716ff476b86b8612",
"assets/assets/images/2.png": "b71b1e866074a46ace69f60d83a8ae5d",
"assets/assets/images/3.png": "1657eb18c7adb431d11905ec6fb131d5",
"assets/assets/images/4.png": "3145290c35c974a53e865a441f80e186",
"assets/assets/images/5.png": "92ed69845b0c5afe60ecef976eb36a00",
"assets/assets/images/6.png": "1423fe96ef411101097f32acc4d7ecd1",
"assets/assets/images/7.png": "ffe093a5849d0f08a1531e9e241a0e0e",
"assets/assets/images/8.png": "f2900623e7d3b04ddb5af687ff2d01c7",
"assets/assets/images/logo.png": "afaa0417d62360fa62ca3e40bf096260",
"assets/assets/images/real_bg_1.png": "247814d388aea06744d95c7297273596",
"assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"assets/assets/nodatafound.png": "248ef50c0361053ebe7269460031a4dc",
"assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "df542e8ff7b4bc93d376c7e3f56bf28e",
"assets/NOTICES": "d62942fae2c8f924e131ab7811a319e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "416fbd43af735fe497423f57e2e76f28",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "b5ceee1cf8142b140d43279aedd4d116",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "460951a92ab806cf06eb80d841904a0d",
"/": "460951a92ab806cf06eb80d841904a0d",
"main.dart.js": "e25de578fc1c67534a2cbb98bd7a2d56",
"manifest.json": "1a4a6d691303c48b3bcb5eef678928cd",
"SquareCent/.git/COMMIT_EDITMSG": "162faab05f639720546ec691a7c0df59",
"SquareCent/.git/config": "c8ab32e19f2635fab5dfcb4b363af162",
"SquareCent/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"SquareCent/.git/FETCH_HEAD": "d0698e039acb3aebdff67ba572bb43d4",
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
"SquareCent/.git/index": "5be982bd38fa9e5e0f6e5b0c5b42efc6",
"SquareCent/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"SquareCent/.git/logs/HEAD": "dac23f32f489db43f19dd498370860a7",
"SquareCent/.git/logs/refs/heads/main": "dac23f32f489db43f19dd498370860a7",
"SquareCent/.git/logs/refs/remotes/origin/HEAD": "746befdf3ca7f542c41f72d77725e866",
"SquareCent/.git/logs/refs/remotes/origin/main": "a7178f204b7a1439d8e463a58701a1ce",
"SquareCent/.git/objects/00/b6cc496b58b71e8cbcdd4d463a592f365b6d42": "74daf4a7805ba194eaf8cac1ed0a8067",
"SquareCent/.git/objects/01/4282886c690e000f676ca5b6460051b315c7a9": "109be46794657e9e57f491626db0532d",
"SquareCent/.git/objects/03/70aa617368748ad6b3e391e430f4240749a041": "010fb5d131038506ed260b6c72736b42",
"SquareCent/.git/objects/05/c6e3e24614cc479e457a1c48325d43c23cf36e": "6414f1963634d7e253d1fd954d118c82",
"SquareCent/.git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "cc729cbc1de09e26c8ac1c31cb284e98",
"SquareCent/.git/objects/06/90893b38609739392edb0996d9d7864cef405b": "3bbfcf95089027eaf88bab54b054d005",
"SquareCent/.git/objects/07/e404c622d964877008b1ae7fc8f2ffc41a6d9a": "47e87e6b0cc9f6af023ff10a237d227a",
"SquareCent/.git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "aa6bc2588c86a5df58354e8329a5819b",
"SquareCent/.git/objects/09/e4fa20ad3938ec3689002ed08d200fc52822ea": "aaa87582395db1016860b03659a82d1e",
"SquareCent/.git/objects/0a/9c0db641735c887852832157a0cfe9c3694852": "3134e07f5dcba5cc3e03b18175e2a08d",
"SquareCent/.git/objects/0d/c3438da8b7f8ef08ed2d82d730468376722f3d": "d1be66508c0ff7b4b4c0c923acc2e076",
"SquareCent/.git/objects/0f/f61e08b01444bba7562123bf22970cd321c5fe": "98fbeb5aea40e86d3ca6e6add0b8ec15",
"SquareCent/.git/objects/10/477079cf4def34891ce4f4a4ba013b04885e4c": "85f2c3232e9ee1d7cd30e551fc384f35",
"SquareCent/.git/objects/10/bfd05cbe2893106deb640b348ab1d6239117f9": "4e28625293eb0701575cf665fdbaf790",
"SquareCent/.git/objects/11/82d7689db7bacd64a46963eba6747e835514c3": "1769c2e206e1f05ae0636b8eaa4b668d",
"SquareCent/.git/objects/12/07f8608a90bda9de89bb03f2938ba7113c5378": "137db789fb1df68eda872b6d4ad72898",
"SquareCent/.git/objects/13/3691d4971029f3566556c36afec4dbcfe040cd": "0426c31354af5733d0141c307c5cb3cd",
"SquareCent/.git/objects/16/cee5bb343b164c58be1f77078c8b32156f3fcc": "5e0e9641e8d3c9cea01c41ba59c199dc",
"SquareCent/.git/objects/18/5850eb7f6bca84c1b997ac0b3dc479d24b33b1": "6297f7944ff7f6458135530d036623a2",
"SquareCent/.git/objects/1c/9e0160f5ef054777a80d0abea3ba074dfdabe6": "a4544660f97cfb099d2e89a72ae61fc6",
"SquareCent/.git/objects/1f/e846a156e835b31e12486df0244139adca2c34": "a52187a79cd9144592a6ed78d5c782b9",
"SquareCent/.git/objects/1f/ed6fceb5153a5c6a45e1a93a6165514efb242f": "8a306f9b5805eb3968b93790c4a006ff",
"SquareCent/.git/objects/25/233e82e52d4da3ce561e7f52e4b12642109fe4": "b6806dc7b6f0a2c0e76d2886374a7b90",
"SquareCent/.git/objects/25/f9ede9317f756285999d9e6f19ca28ad5b3763": "de7a82c4d2bc679eb17f03835d46d5dc",
"SquareCent/.git/objects/28/9eea6a87a8f1643d652238c83679518c6a6161": "3e9a1f41b04ecd9b05cd3ea8e07dede6",
"SquareCent/.git/objects/2a/1b72f89e0c7118b9fee3cc3585673c1a8e2c88": "b9621d5c9111c62add047d5a56bb75f1",
"SquareCent/.git/objects/2b/174fdb3921443530d102cec3ae7dbef0a50e01": "07274512b102b76544b9cdf2c060169b",
"SquareCent/.git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "f610cbe34ab930f142b6d073ab27deb5",
"SquareCent/.git/objects/2d/6ab7ce47fc6ea1bb3653af96536aaa0ca383c8": "b700be325eff03ac41b552e66e5a119c",
"SquareCent/.git/objects/2e/f55362df5a896117169915f48f4882240c06f8": "898cc928b1fcd925a519f9347dae7527",
"SquareCent/.git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "cefb98dcae0301097bc465deeeb72772",
"SquareCent/.git/objects/32/f139920ce908fcb42339c155192539e2f17dff": "ed70722efe315ac7a34776175c2a6dc6",
"SquareCent/.git/objects/35/96b737f004a5d2adb41ef9b89c2d5f100a0ad9": "78682982a6d098f773f68652932c4917",
"SquareCent/.git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "18afdd808b7e0b924a0e7474cebad727",
"SquareCent/.git/objects/3b/670e441a1de7530460dc97c2eb50005d158301": "bb48d926077f6d09194452e8fde2a0de",
"SquareCent/.git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "707307abdda4f1fc08504b12b08018e6",
"SquareCent/.git/objects/3e/6022a2840353ec053c0fb4ce822cc6f8d6639d": "623e84412ed9ffe985670e6fc88516d9",
"SquareCent/.git/objects/3f/ae8bb3617c96a5c3e66ccf06eebf53994e664b": "511a3e564f4b9dcaae886222507ccd06",
"SquareCent/.git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "b51c8670b810523b169634bf530a8675",
"SquareCent/.git/objects/40/943074266ab36fecd0d5486b490a4caf320865": "ed2b67506d8d6963259f6488c8fb7ea3",
"SquareCent/.git/objects/42/3e1cc9bef37dde593b6b8ba61c868c3053c0fd": "ca72755baa09bbe6527950c3e5afe986",
"SquareCent/.git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "f6fc11391a8c401cfb67cb54aa713a55",
"SquareCent/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "4b82e8a451138284a42647b622432b38",
"SquareCent/.git/objects/4c/c9c0e592eba69e54daf6799f95560481f76486": "4951161a6b5881d703a56b048bc3b21e",
"SquareCent/.git/objects/4d/09c00fa9606adeb90e53337e8966bc41ac7bdc": "d81c1db57cfa322216f285c81b5642f5",
"SquareCent/.git/objects/4d/1397fc5144efbeb962284afb0b367bbd786d26": "6658bf86751f1119e2862a45e3cfb339",
"SquareCent/.git/objects/4f/eab6f603aa7aaa1ac21e13607400c709fa5d34": "829b173b888763aad7a9c1a18e3003dc",
"SquareCent/.git/objects/50/2ca3d6b84028df83693d6be573c5b931cddf0f": "14998f198b2e2f1ac453a08464ceddb9",
"SquareCent/.git/objects/59/b384c28c5b0307b8c26422fdc544bc18998846": "7cfbd4df37598b3a187e5226a5713eac",
"SquareCent/.git/objects/59/b8edfe6d1399d5a3003a9831b84195b57df051": "58644537d3366b8cdc2f787c1e015022",
"SquareCent/.git/objects/5b/cde45d649b66e4a193e281d0abae23a4f94e3e": "8dc6f972f6a9468a8512fb45fb4a2adb",
"SquareCent/.git/objects/5d/ffb2d41c7107418eaef4ed07cf980a0b0cc5b6": "310b1196e1ab9b05336e7f98e1b880a9",
"SquareCent/.git/objects/5f/d959f5bb9bfadbc77b496aa59b78c6e4581ddf": "c4762b319e1730b552765af81e7eeda9",
"SquareCent/.git/objects/60/bfa7789a7ab57c2436b098749a03c6f45da041": "9a669f0b9d89d6e65b7a0dc19fcb7444",
"SquareCent/.git/objects/65/fd1cdaf0dd3228782319a3c7c0a620276fb32c": "607513d9adb943909adf658287acb77d",
"SquareCent/.git/objects/66/0983cf3a1ebbca153425dfb2d9b79fdd986f56": "088da57157cddb23e431da352a086992",
"SquareCent/.git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "f1341a25d22b4a8e5f9c0241d202a781",
"SquareCent/.git/objects/6b/f909845fa13bbe529dcfad7897bf6a3fd46ffb": "1dd39ebfa757e63168d2c259c5b0639a",
"SquareCent/.git/objects/77/6b895a65d726dd48012fedb95240ec7293d222": "e7366b56accce506375507ed8dc6abbc",
"SquareCent/.git/objects/79/56ba84d4a02a965c20b17a9c4fdd22d35c6521": "8bf3eb6dfe85984d9df10f7c17e3fb43",
"SquareCent/.git/objects/79/cb548217e341e9909203ba8d87156dd02d52e1": "db5fc5db3a500232fd3acc85d24a58ac",
"SquareCent/.git/objects/7d/c6f868e7fc139632c5ba028afbf23935ce0c2e": "f7988ad43962d8a97853d6cf5643a1f5",
"SquareCent/.git/objects/80/8192651801033c6b823ae597fac52baa0a2562": "0e763407a3d5a0fce3040f2ffc46b980",
"SquareCent/.git/objects/82/5c1e95cbb240e64533ad47b53963057ff3136a": "de204935c6242fe8039a0f81fc3b1d54",
"SquareCent/.git/objects/82/8500f9b5eef29c3f97eb27384b8efbdaaef0a0": "c4443d483e05288a53016627829f4e01",
"SquareCent/.git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "f88c3e8f69490491359c01fdfbf4dea9",
"SquareCent/.git/objects/86/9f0bcc009a0417a6c0f04683cb19e8d9e076b0": "12e5ced35a3d61fa768de61967adc25c",
"SquareCent/.git/objects/87/4e2951642b2672a02cb7dc91c3a9c4ba508f3c": "0915f1d55de2f5bc01b52587cc63f811",
"SquareCent/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "741ebbc8fe0e42c5efc5679e00865b0e",
"SquareCent/.git/objects/8a/0a5df90576a563183537d8214b616e02a7293a": "aa7a5e620c897f92ebaf9aeb29e7258e",
"SquareCent/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "935f6777d5a34b22eac29575fdf07a81",
"SquareCent/.git/objects/8c/84cf1ba3cde36dc0518ca8b8d62b26e17b6e65": "7056863c64e3a098346169d28ecdff0c",
"SquareCent/.git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "cc171eda59b2198bcfb662da9c3ed257",
"SquareCent/.git/objects/91/026dd923c8ff6ce301030d9bb3b044f89553be": "aaf38108fee4861fcaaa259854bc693e",
"SquareCent/.git/objects/92/a565478b4ad60baec3aae5909d422c85eac63e": "814bb18b2308cdfbf41dca867671cae7",
"SquareCent/.git/objects/92/c7b658e4c9806fb3037b5a485b474537319ae6": "db3dbda5108fbe05a236bf70d62d05e9",
"SquareCent/.git/objects/96/4d8ed33a244d46fa1fd6f34b1b827d188869e7": "02bce6093054529cad263a9e1ee59673",
"SquareCent/.git/objects/97/58e630bd89193c7bf53cb372d7c907eaea3d1a": "d0a4c44dd8941f77d1c906dd2f8c5e0b",
"SquareCent/.git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "e0aee1a764d4e79300d1392e0233ed7e",
"SquareCent/.git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "0b688f613cb79b7928e386a6ceb6ac8b",
"SquareCent/.git/objects/9c/9e1e16d28261c1d57f152897818da97af4576f": "5de5e14190ddf7c1ef7b9253f39a2473",
"SquareCent/.git/objects/9d/584811545e9a776a56396c871bdaccc0bf0185": "55c9ec83d8cb05a2da3a9369e4f7fdab",
"SquareCent/.git/objects/9e/6ff1de703d48881431a50aea81825053c07813": "77806845faf5c0ba6a2ef0cf1215b613",
"SquareCent/.git/objects/9f/728f20ed74d1300c3a26008d958f8108a863b6": "5cc2bf1015d7c1f6e6227ebed26877c7",
"SquareCent/.git/objects/a1/b8e6ba5220ce95fbac3b12b483b6a7134653ee": "f38d3b42ded05bc6e3ca4d0f8ea0e225",
"SquareCent/.git/objects/a1/f8bdc577a5029040c2da121d838351c68643fc": "5d95621d9b0adce53a2cba2ce35a26ba",
"SquareCent/.git/objects/a4/c21cd7dc26bd86fef4420ae0e0d1676c53d394": "4a1945fd2ed73955d32093f84b87582a",
"SquareCent/.git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "a8ee603f3c72787ba9ac0d9e8695cfe0",
"SquareCent/.git/objects/aa/154ee7502345271c0a25de05c1c73b9206e93e": "2b3e14319ef24f351a123445d143e243",
"SquareCent/.git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "0f71dae0bcf233241efa99a3c9d748a0",
"SquareCent/.git/objects/af/de8486f3543cb4ca53fecf11c080a17498ae22": "670983a51e5efdbc2cc8dfde5711c793",
"SquareCent/.git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "61886305a27a3edc9485ae96c5c20381",
"SquareCent/.git/objects/b3/ecc96e3bfce9c7a37b232463282fa704710e14": "760de881cadb2b77ac8a54f45e731470",
"SquareCent/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "4205eef49190d51b728a5fe78bc74582",
"SquareCent/.git/objects/b7/a5b0c390ac1932a9feac34b2e5f92cdeabf6e6": "d7cbd1b85e1991e6fe2301d6708dc8cf",
"SquareCent/.git/objects/b7/d30665e03266c5f9434ebeff68d614ef7e3413": "2cf28e427cfd03f34e2ce4235c63894d",
"SquareCent/.git/objects/b8/956bdf2ba08a2af8c7ec19c597142a1e472855": "e043bd5f36ada3d1d45b1ccabc9369ab",
"SquareCent/.git/objects/b8/a0c0e654f95b54c3655345b8d2315003e39cfa": "e72d37af70940a776a20164bd2a0f219",
"SquareCent/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "4adf46374f95b9427c9fef44980c448c",
"SquareCent/.git/objects/b9/4177b1838ae5c35ffd52a9742e57cbddf98d3a": "d8aec16546d4b0e9ea55c2ca29f3fc05",
"SquareCent/.git/objects/ba/e6f747fbc74a77dde3e670fc9ac1745cc60fd9": "06f62107acdf2166167e73edc70fe81c",
"SquareCent/.git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "5e6d59f1d6187e2b1ab5f657c723ff8c",
"SquareCent/.git/objects/c1/e9f9d123e1e1905184bbf47b6e04db3c4f1ec0": "003a243fc889797569b7eb6a8d238c43",
"SquareCent/.git/objects/c3/85cc846c806d56248f2cf08e49d45cb851f194": "8fc2e59f0a76298df9c99c26da01cde9",
"SquareCent/.git/objects/c5/4cd3cf44fc78b13256713d46bd01d42989d6cc": "49cdd0eb69265f6149bb738437c5e383",
"SquareCent/.git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6060cb588c8774586304298a5710f1f7",
"SquareCent/.git/objects/c8/3a2914a24d3fe95697bd600548803c3907d246": "c6c9aec8282b8ce37c1517f0e102c827",
"SquareCent/.git/objects/c8/79b1f3ddc54f9b64585a931ad2d8758e33e475": "45ca4cf7a882ba1f31469d62d1269964",
"SquareCent/.git/objects/ca/6ed55a091ef260e8152932ff28ced56eb2a27f": "edea01f2f592df96bcf4e33601d40df5",
"SquareCent/.git/objects/ca/7b6b1856b5b61d8898ab80516afa2d30cafb61": "fd8de20bd79af3d4d6317f65fe2bd732",
"SquareCent/.git/objects/cc/975a4882ea03bbf67850b159c184f4752fd9ba": "18f43c854f6151d52c23f54a82c86a02",
"SquareCent/.git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "e328ba153ad3c7d383daf129966de954",
"SquareCent/.git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "43ec7593c54051d29f6a01ef0b3cdb05",
"SquareCent/.git/objects/d0/f88a2d1b9dbbecb5d6ffa31acf0a54ad7c06cd": "d75cfceb1943b299e8ef451f9d151829",
"SquareCent/.git/objects/d3/e46a187be91f094b086f2adeb4cdf366f0ce4e": "94cced8f1c5c14b2d82ffea164298f52",
"SquareCent/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "43dc1abdf318479619f8ba30d339447d",
"SquareCent/.git/objects/d5/02974c48cf8580f1c768277f9e887da396fc17": "390896f3948164510ec14a86c7ee55ce",
"SquareCent/.git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "6fb66a610eeb3a4d0399d24581bd4509",
"SquareCent/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3655e2595dff3e9a6535903ae76f08bb",
"SquareCent/.git/objects/d7/428c87fe9d11f067641e5c5809918fa0f220b4": "5b6528b9767b2abc7802d31b6ec7e9ee",
"SquareCent/.git/objects/d7/a839f316fbbe5c9a55a552701bdf3f05c5f142": "010c63efd838ee7998c644ac6d319ce3",
"SquareCent/.git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "561d04eb65f955d114e3388465614e21",
"SquareCent/.git/objects/dd/8302b3818893ea34d8c39c56bfa497e0df622e": "9d7f7c00f0bff7ef26374bae3cf67529",
"SquareCent/.git/objects/de/68491654f7d5576646a67a8c8d09af836d6216": "45717ca260a406e5a238ce49752e13a9",
"SquareCent/.git/objects/de/7ea2729b7848960cb248123b18a845434f3f23": "11c4240b99bca5fbe977c6199a18177e",
"SquareCent/.git/objects/df/c05e9728dfe6f3a591df44d4620508b6116d86": "350e913082f0afce2b3c9bac40c2ac1c",
"SquareCent/.git/objects/e5/8d26cb01b02f1d21b57b5c88556df8c9472b90": "302e8ce93a55487f59859c978cd14eb7",
"SquareCent/.git/objects/e7/e274f3511cc4b2d6b58c1cb2dcb00707bf777d": "54bbf45488f8ea6cb3635ec54f3e35ac",
"SquareCent/.git/objects/e8/bc95980146395b5b8c6446744cb6d063e0c06c": "49e19abb6f1ff70dafd4e5211f32db45",
"SquareCent/.git/objects/e9/b73aad1fb5642113e4dc2d1b03c6024890ef9d": "c943e5b6b23bfef602278c0c615a28e4",
"SquareCent/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "7dbbc94a8e35ee815b1d45df01b3842e",
"SquareCent/.git/objects/ed/557153994e5cee81f86a4ee027a91215519e4f": "fd4435565e182aa82c4e0afc1de90523",
"SquareCent/.git/objects/ed/a0552d55b464e722a39f375a8fb822be59be78": "3c46846b437c9c29b42c462edc320730",
"SquareCent/.git/objects/ef/aef522ecdbe9d2d713378a44813675b9267e9c": "29c4b4c9aa36c2ec021f7491efa3e871",
"SquareCent/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "a3bcb2075c8ac99bd68c577183925bd2",
"SquareCent/.git/objects/f4/be422d2ba78edba49987fb67f9d69d6c3260ba": "a932f3be3c6e8cae06de1086a1b373dc",
"SquareCent/.git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "66a93bdb624bc8a34dbe3c3330302d4d",
"SquareCent/.git/objects/f8/8a9e2ed718e24fbdc9a3b14f490d1fc3da84f9": "680e4555844a28abb9a953d14ab3643a",
"SquareCent/.git/objects/fa/fe3bad4191f274a7c0f59c9a469073dd262629": "5c1cd737e736bb01d71a98c834f0c2f1",
"SquareCent/.git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "5683090fd9e290a9ba6fa0dd1a01142c",
"SquareCent/.git/objects/fe/8f58f50497a94212c0996ba2979e6cbea3e4be": "a0c07ee6a1d99e66524da03d28fe07e8",
"SquareCent/.git/objects/ff/2025dfb80c246c3b68a80c526772ae82ab9f18": "8d6ffd55cf9373b38a0e04db5335d35e",
"SquareCent/.git/objects/ff/30c958830dd29770a1ac5e918370874950d74a": "370208a1630cfe944f3fb0fdb11271c6",
"SquareCent/.git/refs/heads/main": "9cf356af1936e93097b5e7ce29845de0",
"SquareCent/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"SquareCent/.git/refs/remotes/origin/main": "9cf356af1936e93097b5e7ce29845de0",
"SquareCent/assets/AssetManifest.bin": "166bd14e0bfd7051171737626afca350",
"SquareCent/assets/AssetManifest.bin.json": "d1bfb0c563242950f8f42711d53f0abd",
"SquareCent/assets/AssetManifest.json": "fe51d25b6a116e2c46fab9a6da6d70a1",
"SquareCent/assets/assets/addbtn.png": "f92452a171c821fd716ff476b86b8612",
"SquareCent/assets/assets/images/2.png": "b71b1e866074a46ace69f60d83a8ae5d",
"SquareCent/assets/assets/images/3.png": "1657eb18c7adb431d11905ec6fb131d5",
"SquareCent/assets/assets/images/4.png": "3145290c35c974a53e865a441f80e186",
"SquareCent/assets/assets/images/5.png": "92ed69845b0c5afe60ecef976eb36a00",
"SquareCent/assets/assets/images/6.png": "1423fe96ef411101097f32acc4d7ecd1",
"SquareCent/assets/assets/images/7.png": "ffe093a5849d0f08a1531e9e241a0e0e",
"SquareCent/assets/assets/images/8.png": "f2900623e7d3b04ddb5af687ff2d01c7",
"SquareCent/assets/assets/images/logo.png": "afaa0417d62360fa62ca3e40bf096260",
"SquareCent/assets/assets/images/real_bg_1.png": "247814d388aea06744d95c7297273596",
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
"SquareCent/assets/fonts/MaterialIcons-Regular.otf": "df542e8ff7b4bc93d376c7e3f56bf28e",
"SquareCent/assets/NOTICES": "d62942fae2c8f924e131ab7811a319e2",
"SquareCent/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "416fbd43af735fe497423f57e2e76f28",
"SquareCent/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"SquareCent/assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"SquareCent/assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"SquareCent/assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"SquareCent/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"SquareCent/canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"SquareCent/canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"SquareCent/canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"SquareCent/canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"SquareCent/canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"SquareCent/canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"SquareCent/canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"SquareCent/canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"SquareCent/canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"SquareCent/canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"SquareCent/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"SquareCent/flutter.js": "f393d3c16b631f36852323de8e583132",
"SquareCent/flutter_bootstrap.js": "1b11a1dec2ad306b0c19960b6f9aa590",
"SquareCent/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"SquareCent/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"SquareCent/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"SquareCent/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"SquareCent/index.html": "f7751883905c75de573fb8923a0426da",
"SquareCent/logo.png": "afaa0417d62360fa62ca3e40bf096260",
"SquareCent/main.dart.js": "e25de578fc1c67534a2cbb98bd7a2d56",
"SquareCent/manifest.json": "1a4a6d691303c48b3bcb5eef678928cd",
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
