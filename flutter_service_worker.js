'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "99d3135f8787c36ab50e24a9184ca006",
".git/config": "37c3fb36cc013f3a99370bd50f438dd9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "85b0a07e59c6d62096e98d04998eda99",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "95cd787597d2f2d4d805183311e40bca",
".git/logs/refs/heads/main": "95cd787597d2f2d4d805183311e40bca",
".git/logs/refs/remotes/origin/HEAD": "ba46e3e34f34aace740be5c6f3982b41",
".git/logs/refs/remotes/origin/main": "62073576056ed858b355a37ff9538839",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/bd3d89ebe15560886a2558d2138f1188d22410": "a93db153279fa888a22d3723194d8770",
".git/objects/09/2b767531e15f2125b034532319f6ff9f7591c3": "d2e4a4ffa92f7ec2899f57946409e0e5",
".git/objects/0a/09b44493e95985624e77fd6ffaeb3812aac1b9": "990392c647c816a1f51821b03130b8cc",
".git/objects/0b/1c73b485188dcee685868f5e4a8aed711e1397": "181db0bbca34c03808171860f2232733",
".git/objects/0d/24c1dfbf4fbad42b07deec748b165a533b3885": "80d7e8750ae20caa4ad00173614fbd07",
".git/objects/13/c7bfb215281f24a96dfaa3e4070bea91a4a541": "41fa3e1f2fefdade04904395fd5674a7",
".git/objects/17/5629d5a479aa47f72b847cc63e71b772e8c576": "798415a53d8bdda599b0973e566b29c4",
".git/objects/18/f9a20442d415e8348502d8d847d5c2123a8f02": "954258cc3ef712f10d1107a296d04be0",
".git/objects/24/cd7646d8293ee53bd8cf099e63d7dcc4693286": "0a110f54ced757a4f50c22ccfce8b734",
".git/objects/2a/537c45440fb2559ede8eccb91fd545ab76fb1a": "568408cfe0b742b0dbd0c3286095334d",
".git/objects/2c/31a743bb19cb55855d87a74708fe0fc0c70a9c": "d987cf82615d619e3688bdc7ff933b02",
".git/objects/2d/7467898fa3b6dbf8f6a0e79f28fc91518405b9": "bde426afcf6cfae8b7387e32de00bd9a",
".git/objects/2e/bcd0c33b15ad7b97864e0df66f0f27be4823e4": "56f58dee02bf06e3e1ce1d9b5b1155b1",
".git/objects/30/6a0164670e2239feaf2b1dfe41f6d501173e6e": "ae22629b47cf2c0e927587c5d2e84dcd",
".git/objects/30/9111f069fe2014eef0aeda9d03386ae2a95707": "55bf8851cf120f412134d251c7113c52",
".git/objects/32/7657286cb16b0f82e8f6e68809bcc85ef45a4a": "4d60dfc34ab5a48e9c26b3b8282afc33",
".git/objects/38/4495cfa1f8c6e1fd071ff38e027158a3d39fea": "02d7b768b18d399a46af45eef25cb9dc",
".git/objects/3b/27a5c2144a6f57ce30f6015461ecfd84ea9409": "b19294ff5cb50931d8b568f3f08a010e",
".git/objects/3c/431b6d5f71997fdc525757c39034c07af83593": "0403c98e08265a99f4e36a0215a94330",
".git/objects/45/117be3ed337825ec434d2468faeb399cd848ca": "63df435dc7b80d119c37fa6a288062c0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/30a1d966cd5a6984223cdb6e26f430c0f24d2f": "f66e4fc44af3655a7195e55e4983faca",
".git/objects/51/06b864df7198d4d52ec9d3130deae1741df372": "b06f00e128c0b95293aaf8211aaa9c78",
".git/objects/52/162adf9fb87e4b9674158a8f054951aec11a54": "22690b4c651516eb6d79e41cd12ec15c",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/54/db368808ce9e7fb9b73239185dea5c616859aa": "14bb49999c5021eda3ddfbf6a0b629dd",
".git/objects/5a/f1fca8590234d7f339ea56ae24050085339883": "40bbb4aeef514b9581407cd8ae086240",
".git/objects/5c/d3257429dc441598512d169039fd016da5e353": "dd3f86e7e6e0cab55c07e01c94b06ea9",
".git/objects/5c/ebf9bc50a7a22e50077590cde6ab31b1cff38b": "49bd9f2a42ea7c7e08f97a437ecf10b2",
".git/objects/61/245e66f8eea1a465f6b46221c9432e34795c6e": "57926e9879d317b0dc6ccc8b5f366a41",
".git/objects/68/079e856926986762f7b5a9f08e033b0a014f38": "1451788535a443a5b9d98f1f9d276ec6",
".git/objects/68/63676042a2f7ed41726f3c7b417b4583477fdb": "1b944a0ca5eb18dfc08da077f52c55bf",
".git/objects/70/001ebeee044ec5502c5aa003c3f979176ede15": "00db85a594017e698dff5874f9473ff6",
".git/objects/70/9ae8a54f41e2adf9815acdf50b0fbd4cc22861": "58ba5c09ad3f19e6a47c444639269298",
".git/objects/76/2915c6454be5495459e2fba2af90b9cc135099": "d80a3f236b95ed06dace445acc0ff417",
".git/objects/79/8a5d7bf3f31b905754193deb0d716899b28707": "97088e30f0fe40b034277bfbd34666ff",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/cb857dc9a03719897947a156a10a37554f95a8": "9639bde1907bb4c5ffe64a23bd9d013f",
".git/objects/7e/8f150fd5cb0de09c4f8d7168c0bb764b4416af": "949baa9b65b2beb723d9f3b32041dfc1",
".git/objects/82/658aa1c248fa93371a3e8fefbcda4cd0e9e127": "13862d20501dde0787b12d6146413395",
".git/objects/82/98aa1884bc3a5f6244cfbd5dc347b1140b390c": "f2b3913b4b80ec77b52fcd9f27b5aacc",
".git/objects/84/269c9cc323a207779ffbd37a24ac5a974ea199": "3b8ab9a4bd88818ccb60b1a6aa89f0c6",
".git/objects/86/49ad9790d13a04027f4a560d5beda0d479c73a": "5b09acc4bedf396cbe7d3f03d0d2cb5e",
".git/objects/86/6b1e09851fc7b3ee1cd86f9918a5f5ca8a853d": "667d1a2959d71e0dbd60a71eebc99178",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/eb5bdc9e58e8a36f5aa1b5ada05e5a1a585bee": "eca49f7032e40b69e36b44a8ebc4e9bb",
".git/objects/8b/2dc971b06dbce09fa4b196eb5b8766666a6392": "7c5fe9dce64c5ba2043598bbecf13247",
".git/objects/8c/b9f52b2e8a426b6d2f4cd888bdfba69dc3f536": "54c4ea2baaddb3cdc2d16a24a98a8fc9",
".git/objects/90/44410aaea0546d79d27c54f3185d7d77731716": "599095c9ce207ef5e894e36766a22db8",
".git/objects/90/9a6af4b41874ffa5b770bee77a22f706a57fb1": "1478406dc63d64b180401b0103b6dcde",
".git/objects/91/f5073d4f3e33d10700136b94e5899f3bc4a93e": "9c4584a18ff02ee72ac2f1d12f0e8c43",
".git/objects/92/1e7b1e29154947b24256635b4a5c17b46628dc": "dfd5535ab15f0f4dba39226bc8986f82",
".git/objects/93/64403977f5fb683a9f412d4f727bd416abfefa": "1dc792b97d98704f98be78ce8b4de801",
".git/objects/97/bdb2fd3c2042ce953c16a1f34fcab6bfb457e3": "21c00d7e6b2dc737642161c324be1131",
".git/objects/99/f43ef4d3a241dc7b2f67121a247e90b5662bd5": "bd2192532cfdba2936080353fc88e3ec",
".git/objects/9d/ec9a2e99b108ff3fe58ad3af7bbb5ff7976519": "25937ae47137ee8309a3dbcd80ea9298",
".git/objects/a0/343d1d8696664d5b6293860e898a44395cd417": "9ebcbe8704ec7360ccf7d80a14b673d4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/551b6ec8714af86f36fd826405497ef85a66fa": "5d93e38c6679311d68bf897e36974da5",
".git/objects/a1/e7cfeeaf95ec5f772f8aa326371cf3839442ff": "198d2f79f7e88ec77c277096b2ac2927",
".git/objects/a4/f1bfe289033c03e6527e18992d2acbd6f3ca65": "19e80297ef976f26933d1e3c56ba2ded",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/235fa97db5829981c6bc075ccc318d6f546eb7": "f896e2480efc5bc1d2560905ee0ae0d2",
".git/objects/ad/c229cc25b44136cf7700ea1419d688eb1ed3f1": "3e7536629994802cbd4b0b08596f9339",
".git/objects/b5/00dbf5a1382547ac2a7505832bf3e1b08dfaf8": "95d82407a1299e579e5b5b0ae7c7790a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5d383413fd53b9ed899e05327bd31895d43795": "c153059ea33732e8ebc5f8dfbc9a42b7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/178e80ac650a2563462ecf33cba22bb4fc808c": "ba927197b8355be54fc5a94befc73721",
".git/objects/ba/928be490185aef648538bc88b952a742bf8864": "bac3acda8e89c482a2031c7ec9c46de7",
".git/objects/bb/85ecbc22bb6dd074c6a6d55bed5aa8363f473e": "2afd580518746bb9091c59ac87b1b731",
".git/objects/be/405e8bae087c203577b7340e99e36bb2820d9f": "0d8fbbd609c29bdbd382c5977d1782d9",
".git/objects/c2/fdee56e36c75c000d30611a1aea6f516cb9a28": "87efcb463dd69467acd42f26558e0335",
".git/objects/c3/8e464868633cdb8939be7fc6d1a0e480efe227": "64102f8e442793746642d7443fc83944",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c3/c67a211c5ec2a26c1f6815b4fb13486df79b68": "f206df0d3e19b407f8dd9791f1e5c462",
".git/objects/c6/f63c31162916003e5b99dd5f96af8b824019b4": "849bce092df360630c6da421404a3bcd",
".git/objects/cb/5dfc35c0ce507eef4cece5f8afbdba59920595": "03936ad25fa34c8ad3d791c87948d915",
".git/objects/cb/c9cd44dbd723f691358519e646cdee35709db9": "4103e81806b5b66b1c5b78177804ff6e",
".git/objects/cc/f6a924a4daf40553ff71fc2b5353746292a224": "a66dc6d1d8898bde50e54229977f4cb5",
".git/objects/d0/edea12ef0df460d339a952fd0f960ff84937f3": "6a1e2b52b492145e72d394092f44ab01",
".git/objects/d0/f25667195b55bdb34e9dc4f7d68130706464e3": "41627d7dfb43acb7900d6a0ff4e06fe7",
".git/objects/d3/1dabfa93134e6f2d543e19eec237b2bb50d30c": "8d3a2eee4696d5b06e711f39a62e6af8",
".git/objects/d3/6fafec5da1fc852a13928c5d9a282942a5fffa": "f84c7006d35c6118182fe0982a984422",
".git/objects/d4/47a24f5d58a7c8ed5e755d00c18db7b2a41df4": "0280adedc98fbff76cf23a1585b9fad7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/167615cfaecc85e4dc9c0b384ccdc2f432c80d": "f8ddb40e3624f36e79a1f141a545787d",
".git/objects/dd/7d1931a2ea60b39f8c5a242c951f4938ef80a7": "cd07b535df087386dfa3f2b94788d9e7",
".git/objects/e4/d1888832c7c68a6abeb3d62c7612591e3a6d7b": "75c69d399aba4231aa8f990c13bc96f2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0cec4926398edd06bc3b1c55ad8e245062e7d1": "e35495c39363756f5230fef6f1c0f808",
".git/objects/ec/dc27066b1ac2464d34f55a747ea5be5a3fb654": "c1abf1dcd80029b4a63b0f41f92f7c98",
".git/objects/ed/9cad6ca0fc17b63c0031a852613ebd3b93c93b": "f3b835e9d110c8f8d1f5e35e984eb97a",
".git/objects/ee/fb838cc4791177cda5b26e26a04176b9899c54": "2d726af2cbe725c971281cef597810d0",
".git/objects/f2/9ee4f2c9ec001593a4d295e71386eef30df5da": "6cfe193fd2a2487d224c79d83a355b9e",
".git/objects/fa/4d48d9c8f3b49b352232529f7edf40b7a9f66b": "b4db5298dd17d92ca5813895baa4183a",
".git/objects/fa/a5f8b5201158029cb66c28bb21e56572e50f6e": "a54d4763d0fc8a937c69fef4532a5952",
".git/objects/pack/pack-5fc9bdb42353d23febddfbec71e8609e98ef2c7f.idx": "250413c9bd52b9902062b52bd0a18163",
".git/objects/pack/pack-5fc9bdb42353d23febddfbec71e8609e98ef2c7f.pack": "91326bb528b6f245b8947d2719f266bb",
".git/packed-refs": "c168086c0f81412c4a86895343e95565",
".git/refs/heads/main": "550afd2bd7162c6992b586123b941670",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "550afd2bd7162c6992b586123b941670",
".git/tgitchangelist": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "d5a0fd38d222f96948bddd038479a1b3",
"assets/assets/resume_180513.pdf": "5746b12028d2d4bb2a2caf7b13058a4a",
"assets/FontManifest.json": "c804d231e0383c5738476931140d43c7",
"assets/fonts/FontAwesome5Icons.ttf": "0d773f62b51bd53c49170cc2587481a6",
"assets/fonts/GowunDodum-Regular.ttf": "36fba2eb9fb2f66afbc3d344c0b13090",
"assets/fonts/Gugi-Regular.ttf": "d215cc8654cb6b434182cc9150415cc0",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "cf0318481fc198dcc38205867be61df9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fe98e8cf86e2c9d31913680af404942b",
"/": "fe98e8cf86e2c9d31913680af404942b",
"main.dart.js": "bc17a2a7b19f1119ed529788b052b3da",
"manifest.json": "294a19736d34da7c6327c4bda741dc76",
"version.json": "f8cca136bdebabbb32a5d982e13ab787"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
