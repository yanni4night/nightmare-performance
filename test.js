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

var forumNames = ["鑫谷", "贴吧涂鸦", "郑多燕", "百变公主", "奇迹战神", "联想", "战舰大海战", "抢滩登陆", "战斗吧剑灵", "东方不败手游", "造就", "投哪网", "盈火虫",
    "百度问卷", "校呵呵", "征途手机版", "机甲", "合金弹头", "射雕英雄传3d", "射雕英雄传3d", "oppo", "爱钱进", "轩辕剑之天之痕", "优派", "优派", "手游福利",
    "天下手游", "四季沐歌", "妖精的尾巴启程", "盗墓笔记页游", "nubia", "问道手游", "传奇永恒官方", "牛汇", "新凤祥", "祥光", "祥光", "天能电池", "生活家装饰",
    "西北农林科技大学", "中国美术学院", "团贷网", "智操盘", "先马", "瓜子二手车直卖网", "瓜子二手车直卖网", "机械革命", "花漾梦工厂", "尚德机构", "时风", "昂立教育", "昂立教育",
    "豆豆钱", "大皇帝", "课工场", "河南整形美容医院", "百度医生", "延长石油", "小咖秀", "秒拍", "火山鸣泉", "车易拍", "皇牌机娘", "富德生命人寿", "长安轻型车", "阿凡题",
    "楚楚街", "望子成龙学校", "ibasso", "魔霸英雄", "51talk", "良品铺子", "水浒q传手游", "哈尔滨理工大学", "西南科技大学", "优分期", "赚客", "快快租车", "快快贷",
    "我欲封天正版手游", "生发", "爱投资", "万茗堂", "彩票宝", "中油一建", "玖富理财", "王牌对王牌", "韩都衣舍", "小狗吸尘器", "快用苹果助手", "全民暗黑", "亚都", "荔枝fm",
    "百金cdn", "巴士壹佰", "仙灵世界", "龙虎门手游", "小巨蛋", "盛京银行", "惠普"
];

const URLS_WO_SEGMENT = forumNames.map((forumName)=>{
    return 'http://cq01-hj-lh-sandbox-01.epc.baidu.com:8080/f?ie=utf-8&kw='+encodeURIComponent(forumName)+'&fr=search&pn=0';
})//.slice(0,3);
//.slice(0,3);

const URLS_WI_SEGMENT = URLS_WO_SEGMENT.map((url)=>{return url+'&segment=1';});


var AD_RESULTS = [];
var NOAD_RESULTS = [];

function run() {
    var top = URLS_WO_SEGMENT.shift();
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
    var top = URLS_WI_SEGMENT.shift();
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