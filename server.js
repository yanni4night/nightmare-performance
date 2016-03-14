/**
 * Copyright (C) 2015 yanni4night.com
 * sever.js
 *
 * changelog
 * 2015-11-27[12:10:06]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
const app = require('koa')();
const router = require('koa-router')();
const sendfile = require('koa-sendfile');
const serve = require('koa-static');



app
    .use(router.routes())
    .use(serve('.'))
    .use(router.allowedMethods())
    .listen(10560);
