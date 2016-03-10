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

var URLS = ["http://fes1.tieba.baidu.com/p/4238963602?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/3610015511?lp=5028&mo_device=1&is_jingpost=1", "http://fes1.tieba.baidu.com/p/4239254599?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239702305?lp=5028&mo_device=1&is_jingpost=0", "javascript:;", "http://fes1.tieba.baidu.com/p/4237326094?lp=5028&mo_device=1&is_jingpost=0", "", "http://fes1.tieba.baidu.com/p/4239657081?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239886830?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4238651805?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4223176285?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239888330?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4151241119?lp=5028&mo_device=1&is_jingpost=0", "javascript:;", "http://fes1.tieba.baidu.com/p/4239823975?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239551796?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239879189?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/297554321?lp=5028&mo_device=1&is_jingpost=1", "http://fes1.tieba.baidu.com/p/4239894946?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4161343458?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239688534?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239887912?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4227940551?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239837797?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4238061354?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239866261?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4237042284?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239865411?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239883057?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239167977?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4238085667?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239596067?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239810438?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4200984712?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239508339?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4237585776?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239005679?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4238492517?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4236920369?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239675654?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4238963498?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4234236282?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4236835125?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239830042?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239569359?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239868232?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4238606270?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4238745450?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4234302959?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239786730?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4239831385?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4238834442?lp=5028&mo_device=1&is_jingpost=0", "http://fes1.tieba.baidu.com/p/4238697214?lp=5028&mo_device=1&is_jingpost=0"].filter(function(item){return /^https?:/.test(item);})
//.slice(0,3);

const AD = URLS.slice();
const NOAD = URLS.map(function (item) {
    return item += '&topfs=1';
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