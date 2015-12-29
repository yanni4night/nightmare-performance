/**
 * Copyright (C) 2015 yanni4night.com
 * test.js
 *
 * changelog
 * 2015-11-27[11:50:43]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
const np = require('./');

const TRY_TIMES = 1;

var URLS = ["http://tieba.baidu.com/p/4230999316?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4228627576?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4212166985?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4207174805?lp=5028&mo_device=1&new_word=dota2&is_jingpost=0", "http://tieba.baidu.com/p/4231298325?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231404033?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4230887697?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231380905?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231116854?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231381703?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4230483894?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231387990?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231366247?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4229766678?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4227241661?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231237678?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231373871?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4229510094?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231395881?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4229587624?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231395047?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4229191640?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4230706131?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4229912561?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231399586?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4230520813?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231332407?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231389880?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4229156946?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4229616492?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231288091?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231128651?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4228265367?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231396238?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/3654677220?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4230883795?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4230931398?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231352047?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231102146?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4230348784?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231080236?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4220952912?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231340831?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4230952449?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4229662582?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231400813?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4230953200?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231237131?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4228980720?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231384578?lp=5028&mo_device=1&is_jingpost=0", "http://tieba.baidu.com/p/4231051919?lp=5028&mo_device=1&is_jingpost=0"];

const AD = URLS.slice();
const NOAD = URLS.map(function (item) {
    return item += '&lazy=1';
});

var AD_RESULTS = [];
var NOAD_RESULTS = [];

function run() {
    var top = AD.shift();
    if (top) {
        np(top, TRY_TIMES).then((performance) => {
            AD_RESULTS = performance.concat(AD_RESULTS);
            run();
        }, (err) => {
            console.error(err.message);
        });
    } else {
        require('fs').writeFileSync('result-ad.json', JSON.stringify(AD_RESULTS, null, 2));        
    }
}

function runLazy() {
    var top = NOAD.shift();
    if (top) {
        np(top, TRY_TIMES).then((performance) => {
            NOAD_RESULTS = performance.concat(NOAD_RESULTS);
            runLazy();
        }, (err) => {
            console.error(err.message);
        });
    } else {
        require('fs').writeFileSync('result-noad.json', JSON.stringify(NOAD_RESULTS, null, 2));        
    }
}

//with ad
/*np(AD, TRY_TIMES).then((performance) => {
    require('fs').writeFileSync('result-ad.json', JSON.stringify(performance, null, 2));
}, (err) => {
    console.error(err.message);
});*/

//no ad
/*np(NOAD, TRY_TIMES).then((performance) => {
    require('fs').writeFileSync('result-noad.json', JSON.stringify(performance, null, 2));
}, (err) => {
    console.error(err.message);
});*/

run();

runLazy();