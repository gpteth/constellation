var fs = require('fs');
for (var i =2750 ; i < 3000; i++) {
  var json = {}
  json.name = "SCGT" ;
  json.description = "SCGT Constellation";
  json.image = "https://raw.githubusercontent.com/gpteth/constellation/refs/heads/main/assets/" + i + ".png";
  json.external_url = "https://solana.com/zh";
  json.attributes =  [  { "trait_type": "constellation", "value": "Taurus" }, { "trait_type": "trait2", "value": "value2" } ];
  json.properties = {
    files: [
      {
        uri: "https://raw.githubusercontent.com/gpteth/constellation/refs/heads/main/assets/" + i + ".png",
        type: "image/png"
      }
    ],
    category: "image"
  };
  fs.writeFileSync(i + '.json', JSON.stringify(json, null, 2));
}

// {
//   "name": "SCGT",
//   "description": "SCGT Constellation",
//   "image": "https://raw.githubusercontent.com/gpteth/constellation/refs/heads/main/assets/1.png",
//   "external_url": "https://solana.com/zh",
//   "attributes": [
//       {
//           "trait_type": "constellation",
//           "value": "Capricorn"
//       },
//       {
//           "trait_type": "trait2",
//           "value": "value2"
//       }
//   ],
//   "properties": {
//       "files": [
//           {
//               "uri": "https://raw.githubusercontent.com/gpteth/constellation/refs/heads/main/assets/1.png",
//               "type": "image/png"
//           }
//       ],
//       "category": "image"
//   }
// }
// var fs = require('fs');

// for (var i = 0; i < 19; i++) {
//   var json = {}
//   json.name = "Token #" + i;
//   json.description = "This is the description for token #" + i;
//   json.image = "ipfs://QmUzeXJiSu8tBAejX5EHBG9jFHDibpXwETdDDiSLE6U6SB/" + i + ".png";

//   fs.writeFileSync( i + '.json', JSON.stringify(json));
// }


// const fs = require('fs');
// const path = require('path');

// 要重命名的文件夹
// const dir = 'E:\\文件\\Tiara/';
// const dir = './';

// // 读取文件夹下所有文件
// fs.readdir(dir, (err, files) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     // 遍历文件夹下所有文件，并重命名
//     for (let i = 1; i < files.length -1; i++) {
//         const oldPath = path.join(dir, files[i]);
//         const newPath = path.join(dir, `${i}.json`);

//         // 修改文件名
//         fs.rename(oldPath, newPath, err => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//         });
//     }
// });


// // {
// //     "name": "Random Name" + Math.floor(Math.random() * 100),
// //     "age": Math.floor(Math.random() * 100),
// //     "address": "Random Address" + Math.floor(Math.random() * 100),
// //     "phone": Math.floor(Math.random() * 100) + "-" + Math.floor(Math.random() * 10000)
// // }

// // {
// //     "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
// //     "external_url": "https://openseacreatures.io/3", 
// //     "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png", 
// //     "name": "Dave Starbelly",
// //     "attributes": [ ... ]
// //   }