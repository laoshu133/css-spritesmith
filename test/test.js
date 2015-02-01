var cssSpriteSmith = require('../lib/css-spritesmith');

cssSpriteSmith({
    cssfile: 'css/icon.css',
    // sprite背景图源文件夹，只有匹配此路径才会处理，默认 images/slice/
    imagepath: 'slice/',
    // 各图片间间距，如果设置为奇数，会强制+1以保证生成的2x图片为偶数宽高，默认 0
    padding: 2,
    // 是否使用 image-set 作为2x图片实现，默认不使用
    useimageset: false,
    // 是否以时间戳为文件名生成新的雪碧图文件，如果启用请注意清理之前生成的文件，默认不生成新文件
    newsprite: false,
    // 给雪碧图追加时间戳，默认不追加
    spritestamp: true,
    // 在CSS文件末尾追加时间戳，默认不追加
    cssstamp: true,
    // 默认使用二叉树最优排列算法
    algorithm: 'binary-tree',
    // 默认使用`pixelsmith`图像处理引擎
    engine: 'pixelsmith'
}, function(err, spriteData) {
    console.log(spriteData.cssData);
});

