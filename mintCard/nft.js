const fs = require('fs');
const path = require('path');

// 要重命名的文件夹
const dir = './';
// const dir = 'D:\\NFTIPFS\\GoldNFT/';

// 读取文件夹下所有文件
fs.readdir(dir, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    // 遍历文件夹下所有文件，并重命名
    for (let i = 0; i < files.length; i++) {
        const oldPath = path.join(dir, files[i]);
        const newPath = path.join(dir, `${i}.png`);

        // 修改文件名
        fs.rename(oldPath, newPath, err => {
            if (err) {
                console.log(err);
                return;
            }
        });
    }
});