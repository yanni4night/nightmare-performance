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

function* work(url, times, sniff) {
    const n = Nightmare({
        width: 750,
        height: 1334,
        show: true
    });

    var gPerformance = [];

    var loaded = false;

    n.useragent(
        //'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36'
        'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4'
    );

    n.on('dom-ready', function () {
        loaded = true;
    });

    var totalTimes = times;

    while (totalTimes) {
        if (times === totalTimes) {
            yield n.goto(url).cookies.set([{"name":"IS_NEW_USER","value":"ff4105375b059388a1baa019"},{"name":"TIEBA_USERTYPE","value":"280cd18fbff0e1459fef99e9"},{"name":"BAIDUID","value":"C94905664F21F36045F89D81FC72E2F2:FG"},{"name":"PSTM","value":"1436347344"},{"name":"BIDUPSID","value":"239CF6D14826C64E593283EDBCC283FA"},{"name":"TIEBAUID","value":"dbdb3be1dea9006fce181a46"},{"name":"MCITY","value":"-%3A"},{"name":"CLIENTWIDTH","value":"375"},{"name":"CLIENTHEIGHT","value":"627"},{"name":"bdshare_firstime","value":"1448937926526"},{"name":"SEENKW","value":"%E6%88%98%E8%88%B0%E4%B8%96%E7%95%8C%23%E9%AD%94%E5%85%BD%E4%B8%96%E7%95%8C"},{"name":"SET_PB_IMAGE_WIDTH","value":"355"},{"name":"plus_lsv","value":"c17e48b2a2f01886"},{"name":"PLUS","value":"1"},{"name":"BDSFRCVID","value":"kMksJeC62mwsFRc4esy5hFElWg5G1PvTH6aoo89JCfZ2_7AYCnJtEG0PtvlQpYD-0kYVogKK0mOTHUvP"},{"name":"H_BDCLCKID_SF","value":"tb4f_ILXtDvbfP0kb4QEKPteqxby26n3JnneaJ5nJDonKfJmjtIMbJtT3x7l047U52393fOvQpP-HJ7zQhjJLnK0Qh3vBMoM5IJvKl0MLpF5DMjxWf8VQ-tO2xnMBMPjamOnaU5KLIFahKvmq4QJK4_H5hb-2C62aKDsBJky-hcqEIL4jxrh0UCgjMoeQxc33eTQ-b3cLfPBHUbSj4QoKJcXyRQwBbJI-6nMaPcwBq5nhMJmjPvGKhFvqto7-P6y523ion6vQpnlfxtujjLhej53eaRtaRO-26btWjra-IbJKROvhjROXtPyyxomtjjLb57lbJ8254OBMJnDQtvRbTL1DJ3qLUkqKCOyVITF0bQAhxA6LqrThxI3QttjQn3qaN6jhl-EtnvZSR7TyU42hf47yboqQTT2-DA_VU5"},{"name":"BCLID","value":"8800641420590885597"},{"name":"H_PS_PSSID","value":"17745_1454_17924_18156_17944_17001_17072_15066_12198_16096_18019"},{"name":"wise_device","value":"0"},{"name":"baidu_broswer_setup_殷勇02","value":"0"},{"name":"LONGID","value":"1505449736"}]);
        } else {
            yield n.refresh();
        }

        while (!loaded) {
            yield n.wait(1e3);
        }

       var times=0;
        while(1){
             var timing = yield n.evaluate(sniff || () => {
                try{
                    return +performance.getEntries('resource').filter(function(item){return /st.gif/.test(item.name)})[0].name.match(/fs=(\d+)/)[1]
                }catch(e){
                    return 0;
                }
            });
             var timingObj = timing;//JSON.parse(timing);
             if(!timingObj) {
                yield n.wait(500);
                times+=1;
                if(times>10){
                    break;
                }
             } else {
                gPerformance.push(timingObj);
                break;
             }
        }

        
        /*if (Array.isArray(timingObj)) {
            gPerformance = gPerformance.concat(timingObj);
        } else {*/
            
        //}

        --totalTimes;
        console.log('Calculated:%d/%d', times - totalTimes, times);
    }

    yield n.end();
    return gPerformance;
}

module.exports = (url, times, sniff) => {
    if (Number.isNaN(times) || times < 1) {
        times = 1;
    }

    return new Promise((resolve, reject) => {
        vo(work)(url, times, sniff, (err, performance) => {
            err ? reject(err) : resolve(performance);
        });
    });
}