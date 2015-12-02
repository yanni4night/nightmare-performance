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

const TRY_TIMES = 50;

const AD = 'http://fes1.tieba.baidu.com/mo/q/m?word=%E9%AD%94%E5%85%BD%E4%B8%96%E7%95%8C&page_from_search=index&tn6=bdISP&tn4=bdKSW&tn7=bdPSB&lm=16842752&lp=6093&sub4=%E8%BF%9B%E5%90%A7&pn=0';
const NOAD = 'http://fes1.tieba.baidu.com/mo/q/m?word=%E9%AD%94%E5%85%BD%E4%B8%96%E7%95%8C&page_from_search=index&tn6=bdISP&tn4=bdKSW&tn7=bdPSB&lm=16842752&lp=6093&sub4=%E8%BF%9B%E5%90%A7&pn=0&noad=1';

//with ad
np(AD, TRY_TIMES).then((performance) => {
    require('fs').writeFileSync('result-ad.json', JSON.stringify(performance, null, 2));
}, (err) => {
    console.error(err.message);
});

//no ad
np(NOAD, TRY_TIMES).then((performance) => {
    require('fs').writeFileSync('result-noad.json', JSON.stringify(performance, null, 2));
}, (err) => {
    console.error(err.message);
});
