'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "633d6cef542bc695c675c638aa671c86",
".git/config": "37c3fb36cc013f3a99370bd50f438dd9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9e385e3b4167c71341b605228776c9b2",
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
".git/index": "51057fc891dedd07da8afb71a11b9cf1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9d80af91f8ad322c62d9f1ac971939fe",
".git/logs/refs/heads/main": "bdfcb07c82e0fd5ba30c59f2b766fe7f",
".git/logs/refs/remotes/origin/HEAD": "ba46e3e34f34aace740be5c6f3982b41",
".git/logs/refs/remotes/origin/main": "8b14d6c9b02812c23c515ee9d51f48ea",
".git/objects/01/204b14aca5b825a90ce707168e5c6bd71d27b9": "7f8daee704eba46adaece16cb137a069",
".git/objects/02/010214be923882a440f6d1789cfff28ebc925c": "c41236fa8d05e85ff074a3a1494a9efb",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/349f0619e304ffd839147d4b9c8db11d6b4769": "f38f84972de30b3112653896048fda88",
".git/objects/07/3893430091d6734b4f3d5d9a64219d145f9243": "baa02c986cfb8c7140db2c0ce6c60d70",
".git/objects/07/bd3d89ebe15560886a2558d2138f1188d22410": "a93db153279fa888a22d3723194d8770",
".git/objects/08/15ec46e6b333822764247d917d7414d4772bc2": "2a7c960abe86efd3463b8a144a5c18ce",
".git/objects/09/2b767531e15f2125b034532319f6ff9f7591c3": "d2e4a4ffa92f7ec2899f57946409e0e5",
".git/objects/0a/09b44493e95985624e77fd6ffaeb3812aac1b9": "990392c647c816a1f51821b03130b8cc",
".git/objects/0a/4b7ea96e04d18ddd4c045085bbc8b4973b5815": "8042dccd288d6e36fe6ae41b1d80f7d3",
".git/objects/0b/1c73b485188dcee685868f5e4a8aed711e1397": "181db0bbca34c03808171860f2232733",
".git/objects/0d/24c1dfbf4fbad42b07deec748b165a533b3885": "80d7e8750ae20caa4ad00173614fbd07",
".git/objects/0f/ead15d22f4bf73ced5f5713d7220c9bf53a525": "81fd06cc3c2989108fbf10e64595dd5c",
".git/objects/11/a2b58da9a8943503d6094e1ac0aaabb7a98360": "e75183b7b979315047732773bdaf71dd",
".git/objects/13/c7bfb215281f24a96dfaa3e4070bea91a4a541": "41fa3e1f2fefdade04904395fd5674a7",
".git/objects/17/5629d5a479aa47f72b847cc63e71b772e8c576": "798415a53d8bdda599b0973e566b29c4",
".git/objects/18/78b91244c84fb7239418888b9965cd9e3e048f": "e86926cdcb652addc8f27cf1097e3148",
".git/objects/18/f9a20442d415e8348502d8d847d5c2123a8f02": "954258cc3ef712f10d1107a296d04be0",
".git/objects/19/26989463294c003bf4d33b9baf59c0c84dc749": "48accb9ca0a34985569c1e8d233812b9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/edcfbc0d65fca321661ba175b98a6652a1a39b": "3c8964d92e9705db72cb61444b6a2f89",
".git/objects/20/3ba9e0f709ba46e35edaca4d19645e4aa1591b": "f4dd1d4005a4a38183d6c26e6d2db12c",
".git/objects/22/81c2c55865bc15ae022099b71b40e1fa025111": "7379f6295a9689b0606249a4dd62806f",
".git/objects/24/cd7646d8293ee53bd8cf099e63d7dcc4693286": "0a110f54ced757a4f50c22ccfce8b734",
".git/objects/25/5608d395274947b523821dc010386898536507": "26ff92be655dea0a893d874e1cd09842",
".git/objects/27/3e678d1405d2774c4c1ffab1c0bcf328f1f781": "f40c5a9b015fdcb3ecfc18e225a97d53",
".git/objects/27/ea2807d967ce8f7bc4787fedfa2377d4cf79bf": "b1ba6ae665f0a295a89a6c9e38350c3e",
".git/objects/28/4bf31063dc4650ea712ed9f75e6db64b269c89": "aebde0d837668abfd87309d7ea36ccae",
".git/objects/28/97c291d80c1adcfc94d74a1fcf5c2777653a47": "ba5798bb35b6468c92b1cb9e44ecf1a3",
".git/objects/2a/537c45440fb2559ede8eccb91fd545ab76fb1a": "568408cfe0b742b0dbd0c3286095334d",
".git/objects/2c/31a743bb19cb55855d87a74708fe0fc0c70a9c": "d987cf82615d619e3688bdc7ff933b02",
".git/objects/2d/5288317a4f121c97de58e20921b8f2d828cea6": "38c60b0e2200e66fc7700abc2f8d27f3",
".git/objects/2d/7467898fa3b6dbf8f6a0e79f28fc91518405b9": "bde426afcf6cfae8b7387e32de00bd9a",
".git/objects/2e/bcd0c33b15ad7b97864e0df66f0f27be4823e4": "56f58dee02bf06e3e1ce1d9b5b1155b1",
".git/objects/2f/a80747143fdd762335ecafe5c40df1ce2a401d": "666891cfa9b829aef027cafbd4bb7eb5",
".git/objects/30/6a0164670e2239feaf2b1dfe41f6d501173e6e": "ae22629b47cf2c0e927587c5d2e84dcd",
".git/objects/30/9111f069fe2014eef0aeda9d03386ae2a95707": "55bf8851cf120f412134d251c7113c52",
".git/objects/31/66c42dfc947167d092b895913b4118429c04aa": "f96ec0fac8a29f2607c80ecc23d75687",
".git/objects/32/7657286cb16b0f82e8f6e68809bcc85ef45a4a": "4d60dfc34ab5a48e9c26b3b8282afc33",
".git/objects/36/8601f99a3f3f479294f9bc709ffac4f7d80469": "6331502d302ed557913acaddff10728e",
".git/objects/38/4495cfa1f8c6e1fd071ff38e027158a3d39fea": "02d7b768b18d399a46af45eef25cb9dc",
".git/objects/39/4d557a267b032c6413f5add1101badd79619d6": "3d80681ffd9513b69ec5ad95fbbe628a",
".git/objects/3a/88232b615992322ebf4265bebc14db31f1839f": "e64a63453177dbbb722077d49cfca221",
".git/objects/3b/27a5c2144a6f57ce30f6015461ecfd84ea9409": "b19294ff5cb50931d8b568f3f08a010e",
".git/objects/3c/431b6d5f71997fdc525757c39034c07af83593": "0403c98e08265a99f4e36a0215a94330",
".git/objects/3d/60b8c3edcd4827e1964d0bfada29ad1bc2a44b": "3ac0402f85c03d14e22359240c8477ea",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/0583076eb6ab1f3962b86f8cbd9bfc8bc836d5": "934f7dc59790a7d8057fa751551cda2a",
".git/objects/41/5ecc5a22f7ed834fd2d2d7d07dd42322c72d17": "b4e4c03a6a2afcf8eac900f16a5801f7",
".git/objects/42/92a758c97b68f34d02d7084441759757acdfb7": "04cb33635f31109534676056f05f6063",
".git/objects/42/b52a19cd4f0349311a03dde517e8f81faf07ff": "70670228fc7b95de81ca105a46b1c16e",
".git/objects/43/27df7ba5865bdcc2e2605e2bfe8e3025642ede": "772dc481053c6b932c2f8acc69b74047",
".git/objects/44/224946c75b1905206664b3072746fafbb9195c": "7814d47c2cfd59c8afc16dce9312f773",
".git/objects/45/117be3ed337825ec434d2468faeb399cd848ca": "63df435dc7b80d119c37fa6a288062c0",
".git/objects/46/407726a6454bf4f4bfa74cd0d58682209ebb4a": "061a6a506f637d3aaf934094be73ea5e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/54ccff2f84019f091daa26b2ed2e98f4aab465": "83cc57b4cf779d9ab55becd2109de8ab",
".git/objects/4c/30a1d966cd5a6984223cdb6e26f430c0f24d2f": "f66e4fc44af3655a7195e55e4983faca",
".git/objects/50/0a4a90fad532eda14eee3d85d59dd4796f5a39": "1c11e43cd241121db6b301f221d72005",
".git/objects/51/06b864df7198d4d52ec9d3130deae1741df372": "b06f00e128c0b95293aaf8211aaa9c78",
".git/objects/51/674dfe62ee687fbd95c3b7a80ede2dfd680a99": "764dd5e5f92431c22809d879868190c9",
".git/objects/52/162adf9fb87e4b9674158a8f054951aec11a54": "22690b4c651516eb6d79e41cd12ec15c",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/54/db368808ce9e7fb9b73239185dea5c616859aa": "14bb49999c5021eda3ddfbf6a0b629dd",
".git/objects/55/8d96d06bfb9425a2312d5fa347c3387ca641ff": "b577e5053ca69e2c2eff13df0dac27fa",
".git/objects/57/b9b364719c7fbe0a6e369ceb4359995d30cbfe": "d56071bf817efba6fef0eab29cd6dd43",
".git/objects/5a/f1fca8590234d7f339ea56ae24050085339883": "40bbb4aeef514b9581407cd8ae086240",
".git/objects/5c/d3257429dc441598512d169039fd016da5e353": "dd3f86e7e6e0cab55c07e01c94b06ea9",
".git/objects/5c/ebf9bc50a7a22e50077590cde6ab31b1cff38b": "49bd9f2a42ea7c7e08f97a437ecf10b2",
".git/objects/5e/4c405245b20b106d2b8e2200f28df49f478220": "1170f76ad5968cf31e03f8dad4aa61ef",
".git/objects/5f/4d6bb488dbe9205bc294e912d09c75c7404676": "defc3b842fc58af2eaf8daa07e48a2f2",
".git/objects/61/245e66f8eea1a465f6b46221c9432e34795c6e": "57926e9879d317b0dc6ccc8b5f366a41",
".git/objects/65/894948c503d86d263d5aa052581dc306215457": "22608f88d84c06ef5f5edee2cd3c9093",
".git/objects/67/199bd2787b3f1c96c10011ee106399f825ed3f": "10baf552f0fb967be2512390a69ea0f3",
".git/objects/68/079e856926986762f7b5a9f08e033b0a014f38": "1451788535a443a5b9d98f1f9d276ec6",
".git/objects/68/377e6080ca6fff1f88eb3fd9c4fae601aa0941": "383fde939b826f295b5f70fd55bb8117",
".git/objects/68/532e849f599f7ff432c6b406380c7e421eb799": "3afddd578bc397ae35a48cabfb50e0ef",
".git/objects/68/5fd311eb50a6cf8efad88baf2b9b7ad36d47a5": "6eff78d9d4775db84b8c6d60e151c01f",
".git/objects/68/63676042a2f7ed41726f3c7b417b4583477fdb": "1b944a0ca5eb18dfc08da077f52c55bf",
".git/objects/69/2508c5ee974b6854f508db09b162ba9a30f292": "dafefad22e71a8724757a065182b71b7",
".git/objects/69/7821665ca392604df072d186a8ecbed72eb0e6": "f66bbe4d23d89282a3a7f91468cf2f6c",
".git/objects/6e/9a8e9c7867effaf7669aa39bb910071953b7de": "8e9d312eaae2010fe2de51a9b2e5a257",
".git/objects/70/001ebeee044ec5502c5aa003c3f979176ede15": "00db85a594017e698dff5874f9473ff6",
".git/objects/70/1ce8885d8a166946ffc65b989d1da6e4cdb410": "30c66a9a8cad5f4a6e3db9c036f322ef",
".git/objects/70/708339dc6b24b239dfac7da7f6bc1e7a5f8098": "2357878974e9373e27010c47b71974f4",
".git/objects/70/9ae8a54f41e2adf9815acdf50b0fbd4cc22861": "58ba5c09ad3f19e6a47c444639269298",
".git/objects/74/dac8e70dcb9050f9215962378cdc26a65cb331": "d2598d3ae6f633202bde9c1129e13302",
".git/objects/76/2915c6454be5495459e2fba2af90b9cc135099": "d80a3f236b95ed06dace445acc0ff417",
".git/objects/77/c6b6d5b0ca4dd99bea48121640016e82bed8fe": "dbf5373736dc798c33c306f52f2b0e75",
".git/objects/78/66265a4f60abd457345b904ea6f26692bfdc12": "f1147e26a98e02ff5a4658de89fcce70",
".git/objects/78/b8ee77509d0a337e8388cdbee5aa04bb88530f": "ce01456aed87cecd9ea25a5bc225c6e3",
".git/objects/79/8a5d7bf3f31b905754193deb0d716899b28707": "97088e30f0fe40b034277bfbd34666ff",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/72eff1a84a50275d9dbc9e5afa62c4aca8a4fb": "3ae27e549b8143983a8838f67dafa9e2",
".git/objects/7b/dccffb6889be115114d129c038aed8d7f17fa7": "325a8fc69decb4214fe2d0d20779bad3",
".git/objects/7c/079fcfafda4f5c77852ac9082d2df88511f595": "f1cd5765a1861abadb8348f1eda98065",
".git/objects/7c/cb857dc9a03719897947a156a10a37554f95a8": "9639bde1907bb4c5ffe64a23bd9d013f",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/8f150fd5cb0de09c4f8d7168c0bb764b4416af": "949baa9b65b2beb723d9f3b32041dfc1",
".git/objects/7f/154f26677cc177310d3ba1c7f7d27309fdba62": "8b40f30e9d69bf794d8c52455342c2f0",
".git/objects/81/a9dc65d8d5601065f81b4482b356cb8237b2cf": "29b23a0068a0a7604ad6f37c9243933b",
".git/objects/82/658aa1c248fa93371a3e8fefbcda4cd0e9e127": "13862d20501dde0787b12d6146413395",
".git/objects/82/98aa1884bc3a5f6244cfbd5dc347b1140b390c": "f2b3913b4b80ec77b52fcd9f27b5aacc",
".git/objects/84/269c9cc323a207779ffbd37a24ac5a974ea199": "3b8ab9a4bd88818ccb60b1a6aa89f0c6",
".git/objects/86/49ad9790d13a04027f4a560d5beda0d479c73a": "5b09acc4bedf396cbe7d3f03d0d2cb5e",
".git/objects/86/6b1e09851fc7b3ee1cd86f9918a5f5ca8a853d": "667d1a2959d71e0dbd60a71eebc99178",
".git/objects/88/bd2176b548c4fd7da5291351dafe082d32cf7b": "743fd775c505a3f0e3f198350fd844ab",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/eb5bdc9e58e8a36f5aa1b5ada05e5a1a585bee": "eca49f7032e40b69e36b44a8ebc4e9bb",
".git/objects/8b/2dc971b06dbce09fa4b196eb5b8766666a6392": "7c5fe9dce64c5ba2043598bbecf13247",
".git/objects/8c/b9f52b2e8a426b6d2f4cd888bdfba69dc3f536": "54c4ea2baaddb3cdc2d16a24a98a8fc9",
".git/objects/8f/94f4cb24b96688740214af3a0054a0b82b1cab": "d8155534429025c9ef92c26905aca426",
".git/objects/90/44410aaea0546d79d27c54f3185d7d77731716": "599095c9ce207ef5e894e36766a22db8",
".git/objects/90/46289e3064a0051aa9eb854fa8f9a275aac410": "bf7f4d136a39edb0cd918d44bfc9962f",
".git/objects/90/9a6af4b41874ffa5b770bee77a22f706a57fb1": "1478406dc63d64b180401b0103b6dcde",
".git/objects/91/9a4879709cf70f0b1fa4f4dfa8037a2d192f5e": "b1d04e55b7c737a4e76308923753e022",
".git/objects/91/f5073d4f3e33d10700136b94e5899f3bc4a93e": "9c4584a18ff02ee72ac2f1d12f0e8c43",
".git/objects/92/1e7b1e29154947b24256635b4a5c17b46628dc": "dfd5535ab15f0f4dba39226bc8986f82",
".git/objects/92/5f087cc42e4aff6731cb892288ba7d9e4e7083": "c21a995d4d61f4c5a199ba5f72dfeb0e",
".git/objects/93/64403977f5fb683a9f412d4f727bd416abfefa": "1dc792b97d98704f98be78ce8b4de801",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/bdb2fd3c2042ce953c16a1f34fcab6bfb457e3": "21c00d7e6b2dc737642161c324be1131",
".git/objects/97/f39a9999be4af52b845a7ebe73ee2cfcb49741": "7f716fabe934128daa149126368c93cf",
".git/objects/98/ef25afa559bf14fb2181ac1a4cacd97a71dd3a": "a0198cc25401de3dabb817a708c5600e",
".git/objects/99/f43ef4d3a241dc7b2f67121a247e90b5662bd5": "bd2192532cfdba2936080353fc88e3ec",
".git/objects/9b/1a8cbc9eedc78ee8045f1677540d4d1be2bd80": "bd0339f27ec6b287d6148eac5a60b07e",
".git/objects/9b/5449fff8aaf25ac852cddc7737e8cfc278a24f": "6c2bf0190f7847abe26849b431212247",
".git/objects/9c/00fee5dcfcec96ca452359dee94898d48a4244": "8243cff705b4cf52d83fe4d904ad7a22",
".git/objects/9d/ec9a2e99b108ff3fe58ad3af7bbb5ff7976519": "25937ae47137ee8309a3dbcd80ea9298",
".git/objects/a0/343d1d8696664d5b6293860e898a44395cd417": "9ebcbe8704ec7360ccf7d80a14b673d4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/551b6ec8714af86f36fd826405497ef85a66fa": "5d93e38c6679311d68bf897e36974da5",
".git/objects/a1/e7cfeeaf95ec5f772f8aa326371cf3839442ff": "198d2f79f7e88ec77c277096b2ac2927",
".git/objects/a2/c72a47657e0ef2bd0024f6e3e9d3e0d9da3e27": "9a3a58660a4dbe06b35f19c08cd331bb",
".git/objects/a4/f1bfe289033c03e6527e18992d2acbd6f3ca65": "19e80297ef976f26933d1e3c56ba2ded",
".git/objects/a6/398db10ef40a4c2a8c2f38787ecc1741c16777": "c0c713934115085fb4e9b7c2426ce820",
".git/objects/a6/ff95235a8d15b3a7e3a4f575a1a0bcdfe0cfba": "9b29b34067305f4285dc828504f590b4",
".git/objects/a9/271ba010e34b19b5a1d8e80680d381e722b98b": "26ada80fcf524baf4cc947fbb8753d8f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/235fa97db5829981c6bc075ccc318d6f546eb7": "f896e2480efc5bc1d2560905ee0ae0d2",
".git/objects/ad/c229cc25b44136cf7700ea1419d688eb1ed3f1": "3e7536629994802cbd4b0b08596f9339",
".git/objects/ae/5ac7165205f8a1c5559c2d02d6c7a67abe54a8": "705357adebcf6c566623c20833b0d2c6",
".git/objects/af/dcd017f80d8b40d30c9e4c4c7ea279230abc56": "42dddcec009001991d580f8c16a8040e",
".git/objects/af/e5a86ba0bf70e155ddfcfb23c1fc116fdbf19f": "a282b4c04192ae9562937dc133a6fdb4",
".git/objects/b4/9ea025eb3a308ad2b7eb4b9a6191e39a05bd2d": "c691e426a6a7d253cbf8899fd3707ae6",
".git/objects/b5/00dbf5a1382547ac2a7505832bf3e1b08dfaf8": "95d82407a1299e579e5b5b0ae7c7790a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5d383413fd53b9ed899e05327bd31895d43795": "c153059ea33732e8ebc5f8dfbc9a42b7",
".git/objects/b7/8ebc00e68e9a4f0fb5df107bcb9c2d120d6e07": "4aa2e391e838fb09418dff86f1bd8179",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/178e80ac650a2563462ecf33cba22bb4fc808c": "ba927197b8355be54fc5a94befc73721",
".git/objects/ba/928be490185aef648538bc88b952a742bf8864": "bac3acda8e89c482a2031c7ec9c46de7",
".git/objects/bb/85ecbc22bb6dd074c6a6d55bed5aa8363f473e": "2afd580518746bb9091c59ac87b1b731",
".git/objects/bb/c7b199ebf9eb433ebb33793ae266c87f9b208a": "31b671e9ab902c66bb0ae612c6d72161",
".git/objects/bb/d8407bb5a029c106124eeecf36ecf711aec861": "834a1cec50ff78226bcbd7590dc4e49c",
".git/objects/be/2272fd13ffa07e3efadb9aa82005fb460f7b19": "1e9f5c4f6f47415bee335b4e718d8128",
".git/objects/be/405e8bae087c203577b7340e99e36bb2820d9f": "0d8fbbd609c29bdbd382c5977d1782d9",
".git/objects/c2/fdee56e36c75c000d30611a1aea6f516cb9a28": "87efcb463dd69467acd42f26558e0335",
".git/objects/c3/0406501a71314f9bb0aa6de8124ed4ec959981": "eb17006b209ffe24451a78881089c96f",
".git/objects/c3/8e464868633cdb8939be7fc6d1a0e480efe227": "64102f8e442793746642d7443fc83944",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c3/c67a211c5ec2a26c1f6815b4fb13486df79b68": "f206df0d3e19b407f8dd9791f1e5c462",
".git/objects/c4/a6118df6408fb3b565c1a6ef5a1a311a03f1b4": "db96ca9dc65e7e71bb8276c495b4f122",
".git/objects/c4/bc82d9d3f7caf03b4e43fcb662127591310607": "1ef2697a233da588c49a0376081f436d",
".git/objects/c5/1d82eea7df1de905f6733133ff07dbad8b29d7": "2445b3831a1d04888532738143f9a47a",
".git/objects/c6/f63c31162916003e5b99dd5f96af8b824019b4": "849bce092df360630c6da421404a3bcd",
".git/objects/c8/4f67c6be2a3e4efec8bb6be92dea45d83dfe5b": "3d80088fb03a8b11f1ec7d156f7956c3",
".git/objects/cb/5dfc35c0ce507eef4cece5f8afbdba59920595": "03936ad25fa34c8ad3d791c87948d915",
".git/objects/cb/c9cd44dbd723f691358519e646cdee35709db9": "4103e81806b5b66b1c5b78177804ff6e",
".git/objects/cc/2fbd22ff9b7631c6dbddfa7f6c527dd818d5b4": "e6c0182b6abbb7ef9d01fa5b890c1322",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/8227f5b774946a9d8dbc115118fb78dd3d2a05": "264c54e37208b7d5c3ef464583bcf0e5",
".git/objects/cc/f6a924a4daf40553ff71fc2b5353746292a224": "a66dc6d1d8898bde50e54229977f4cb5",
".git/objects/d0/020c5f84a0785f13091fccb24037c0e4b9b972": "2a3bd33416cefc0728092b1fe0c16776",
".git/objects/d0/edea12ef0df460d339a952fd0f960ff84937f3": "6a1e2b52b492145e72d394092f44ab01",
".git/objects/d0/f25667195b55bdb34e9dc4f7d68130706464e3": "41627d7dfb43acb7900d6a0ff4e06fe7",
".git/objects/d1/7d4b00f0bd8d5759bcc815da29600d529ea6cb": "a7cd60276673e81d1870dab00e806dd0",
".git/objects/d2/966a15741cc1736fc66fd47a16d1d2c163f648": "cdafa8cbe3c4757b0cfaa3ebdc6f82b3",
".git/objects/d3/1dabfa93134e6f2d543e19eec237b2bb50d30c": "8d3a2eee4696d5b06e711f39a62e6af8",
".git/objects/d3/6fafec5da1fc852a13928c5d9a282942a5fffa": "f84c7006d35c6118182fe0982a984422",
".git/objects/d4/47a24f5d58a7c8ed5e755d00c18db7b2a41df4": "0280adedc98fbff76cf23a1585b9fad7",
".git/objects/d4/90a332798a79ba9b24aa5d4f1740b80998abf7": "42bfc5053156ee1fb195525fa674f83d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/046fd90eaaf8503e167a626ab51a0a4130ddd7": "f8b5de1cabf16154d80675e1ef01448c",
".git/objects/d8/00e3cb8ca950ca8c923ee334aa90ba1bf6b07e": "04166838ce26c2f6f9b54ad9f5f17a04",
".git/objects/d8/1fd7b4198dd5f0dbdcced19d7704afb8be48ce": "49a205bf3f015b881b7ec3417b965887",
".git/objects/d8/c8381fa4727599b4e75998a7b3f72b98279386": "80ad76e03fc234193b96040e51847701",
".git/objects/d9/c83a36165b10049fbfc598bde84f06ac423ec8": "f06253b2178a268d80259bf92a2e40ec",
".git/objects/da/ab4938fec73d6c61ca8848d834abd17bfdfeef": "852d0abf9e8be05913aab1627d89d926",
".git/objects/db/253d033a43a86da01be0e9e20b0bd47e537b67": "4bb3ff3eaeda1fb9cbff60094d346056",
".git/objects/dc/167615cfaecc85e4dc9c0b384ccdc2f432c80d": "f8ddb40e3624f36e79a1f141a545787d",
".git/objects/dc/83a31a94a65c0081257d986ca8975402e56c17": "fff863c82410a145535144d1135ed431",
".git/objects/dd/7d1931a2ea60b39f8c5a242c951f4938ef80a7": "cd07b535df087386dfa3f2b94788d9e7",
".git/objects/dd/a3fe95b957d0c495b9a8637e601ff224c9091d": "0a840675d22a6b220ae00cabce7ec6ff",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/f2aa7a2934446fc54e1da287ff9e695d83a032": "7bbf88f392d3eb82f8af7ad5e89a227b",
".git/objects/e0/1d72ee8d70f899754935d5550384a132ebbe79": "6a03b88a3f2177908218728fea1d1643",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/e984cd02e7e59ee91b4eb13bd1a2c4d017afa9": "d1007e0f57c7971139da796a3ed357e5",
".git/objects/e2/7a07ed80b52e5f3554631da635973f40e8f376": "69d2642299a552c5205ae55f7fd4f5bb",
".git/objects/e4/d1888832c7c68a6abeb3d62c7612591e3a6d7b": "75c69d399aba4231aa8f990c13bc96f2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/8c4b4e05cc3bc215cd0a2aebead03d7f7349f0": "433a314ceb9c8765aa626acf777153cc",
".git/objects/e8/ad93fc34394ed14450a2c044a2efd3cd20fe72": "806de55abc7079bb457b5424473151db",
".git/objects/ea/d4156acc45351a2d98a86f70167d2a1ecda7be": "7cd0104daa89ff4eb2374665a6bb649c",
".git/objects/eb/6a9d378d91519d6594fc782f82c3d7c8db0561": "e0d9072ebaa00e1dd38a71053f59145c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0cec4926398edd06bc3b1c55ad8e245062e7d1": "e35495c39363756f5230fef6f1c0f808",
".git/objects/ec/dc27066b1ac2464d34f55a747ea5be5a3fb654": "c1abf1dcd80029b4a63b0f41f92f7c98",
".git/objects/ed/9cad6ca0fc17b63c0031a852613ebd3b93c93b": "f3b835e9d110c8f8d1f5e35e984eb97a",
".git/objects/ee/fb838cc4791177cda5b26e26a04176b9899c54": "2d726af2cbe725c971281cef597810d0",
".git/objects/ef/9476e586b6f3aa1fbc0f3f8b320f8ab5d39010": "1936f1e932fedc639076f3b17320f916",
".git/objects/f2/9ee4f2c9ec001593a4d295e71386eef30df5da": "6cfe193fd2a2487d224c79d83a355b9e",
".git/objects/fa/3e5599b8eb0e939568f23ad1f3abfab0f465ab": "da049290758a00395d37e94efe0bf2d2",
".git/objects/fa/4d48d9c8f3b49b352232529f7edf40b7a9f66b": "b4db5298dd17d92ca5813895baa4183a",
".git/objects/fa/a5f8b5201158029cb66c28bb21e56572e50f6e": "a54d4763d0fc8a937c69fef4532a5952",
".git/objects/fb/d25a12c71be186d2cb76a0941aa267fcf2161d": "cf765848b32c4feaf0b5799e03d5ad0a",
".git/objects/fb/eee146d8c377f2df8c2fb342944efa254705e6": "e49af347448784be9e01610a92b327d3",
".git/objects/fc/164575718bbb9066ebb5a5ccc7e73388c50d38": "86ea834616ae8f16ab35edef26d12fed",
".git/objects/fe/71cde876e0b3164b04c88c1de937b35516d603": "d54c402b04b0eafc316d460a75522477",
".git/objects/fe/abae1cb3e7c14585c21ba694eb97bf6d267fbc": "46c099c0247ae2d2fe9781b4d526ed22",
".git/objects/ff/4d6c997f40e3e6ef904779beab95909bc60b7c": "d75fb83e512295933a28dd64a7084f23",
".git/objects/pack/pack-5fc9bdb42353d23febddfbec71e8609e98ef2c7f.idx": "250413c9bd52b9902062b52bd0a18163",
".git/objects/pack/pack-5fc9bdb42353d23febddfbec71e8609e98ef2c7f.pack": "91326bb528b6f245b8947d2719f266bb",
".git/ORIG_HEAD": "0ef5e5c4e79a2cab80f590bba52e3107",
".git/packed-refs": "c168086c0f81412c4a86895343e95565",
".git/refs/heads/main": "a38a94c5da68c42018dd0ac9c8ea68b5",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a38a94c5da68c42018dd0ac9c8ea68b5",
".git/tgitchangelist": "d41d8cd98f00b204e9800998ecf8427e",
".git/tortoisegit.data": "150bcaa9ffe89783cb56f3085ffc7817",
".git/tortoisegit.index": "bfa9fbe857a57ea682e17772ccf7086a",
"assets/AssetManifest.json": "5afd498f88364c1ed4a643158cbec412",
"assets/assets/OpenGL.png": "3eeb5a11277c8105e5e852a9eb618d21",
"assets/assets/resume_180513.pdf": "5746b12028d2d4bb2a2caf7b13058a4a",
"assets/assets/Unknown.png": "870d3aeb58d0ffe47f002ec4f9f55c4e",
"assets/assets/Vulkan.png": "c7f800707a7d6ab0107387177af1d94a",
"assets/FontManifest.json": "c804d231e0383c5738476931140d43c7",
"assets/fonts/FontAwesome5Icons.ttf": "0d773f62b51bd53c49170cc2587481a6",
"assets/fonts/GowunDodum-Regular.ttf": "36fba2eb9fb2f66afbc3d344c0b13090",
"assets/fonts/Gugi-Regular.ttf": "d215cc8654cb6b434182cc9150415cc0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e2a6014c8439d821d7cf7cf5c807ccda",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"flutter.js": "195f32f4217e034162a6697208586f44",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f8268e4124a0424b502fad285fe36b00",
"/": "f8268e4124a0424b502fad285fe36b00",
"logo.png": "fea3f14a510817ad926e6b6c379b1c8b",
"main.dart.js": "01f6c87c496e3c0ae627c5b224bdb8e6",
"manifest.json": "294a19736d34da7c6327c4bda741dc76",
"version.json": "f8cca136bdebabbb32a5d982e13ab787"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
