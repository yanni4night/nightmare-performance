/**
 * Copyright (C) 2015 yanni4night.com
 * index.js
 *
 * changelog
 * 2015-11-27[11:35:12]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */

const Nightmare = require('nightmare');
const vo = require('vo');

function* work(url, times) {
    const n = Nightmare({
        width: 2560,
        height: 1440,
        show: false
    });

    var gPerformance = [];

    var loaded = false;

    // iPhone 6
    n.useragent('Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4');

    n.on('dom-ready', function () {
        loaded = true;
    });

    var totalTimes = times;

    while (totalTimes) {
        if (times === totalTimes) {
            yield n.goto(url);
        } else {
            yield n.refresh();
        }

        while (!loaded) {
            yield n.wait(1e3);
        }

        var timing = yield n.evaluate(() => {
            return JSON.stringify(window.performance.timing);
        });

        gPerformance.push(JSON.parse(timing));

        --totalTimes;
        console.log('Calculated:%d/%d', times - totalTimes, times);
    }

    yield n.end();
    return gPerformance;
}

module.exports = (url, times) => {
    if (Number.isNaN(times) || times < 1) {
        times = 1;
    }

    return new Promise((resolve, reject) => {
        vo(work)(url, times, (err, performance) => {
            err ? reject(err) : resolve(performance);
        });
    });
}
