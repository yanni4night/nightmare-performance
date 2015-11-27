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

const TRY_TIMES = 20;

//with ad
np('http://fes1.yanni4night.com/p/4182887999?lp=5028&mo_device=1&new_word=%E9%AD%94%E5%85%BD%E4%B8%96%E7%95%8C&is_jingpost=0&pn=0', TRY_TIMES).then((performance) => {
    require('fs').writeFileSync('result-ad.json', JSON.stringify(performance, null, 2));
}, (err) => {
    console.error(err.message);
});

//no ad
np('http://fes1.yanni4night.com/p/4182887999?lp=5028&mo_device=1&new_word=%E9%AD%94%E5%85%BD%E4%B8%96%E7%95%8C&is_jingpost=0&pn=0&noad=1', TRY_TIMES).then((performance) => {
    require('fs').writeFileSync('result-noad.json', JSON.stringify(performance, null, 2));
}, (err) => {
    console.error(err.message);
});
