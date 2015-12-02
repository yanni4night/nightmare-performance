/**
 * Copyright (C) 2015 tieba.baidu.com
 * test-res.js
 *
 * changelog
 * 2015-12-02[12:15:56]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
const np = require('./');

const URL = 'http://fes1.tieba.baidu.com/mo/q/m?word=%E9%AD%94%E5%85%BD%E4%B8%96%E7%95%8C&page_from_search=index&tn6=bdISP&tn4=bdKSW&tn7=bdPSB&lm=16842752&lp=6093&sub4=%E8%BF%9B%E5%90%A7&pn=0';

const TRY_TIMES = 50;

np(URL, TRY_TIMES, function () {
    return JSON.stringify(window.performance.getEntriesByType("resource").filter(function (timing) {
        return timing.name.indexOf('http://pos.baidu.com/acom') === 0 && 'iframe' === timing.initiatorType;
    }));
}).then((performance) => {
    require('fs').writeFileSync('result-res.json', JSON.stringify(performance, null, 2));
}, (err) => {
    console.error('ERROR', err);
});