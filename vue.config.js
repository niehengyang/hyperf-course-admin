
  // const path = require('path');
  // var webpack = require('webpack');
  // const baseUrl = '/';

module.exports = {
    lintOnSave: false, // 关闭eslint
    publicPath: '/',
    // 打包后的文件夹名
    outputDir: 'dist',
    configureWebpack: {
        externals: {
            vue: "Vue",
            "element-ui": "ElementUI",
            "vue-router": "VueRouter",
            vuex: "Vuex"
        }
    },
    devServer: {
        // port: 8080,
        // https: false,
        // hotOnly: false,

        // before: function(app) {
        //     const base = baseUrl.replace(/\/+$/, ''); // 移除尾部斜杠
        //     app.get(`${base}/:page/*`, function(req, res, next) {
        //         if (['login', 'index'].includes(req.params.page)) {
        //             // 把 /<base>/<page>/* 重定向到 /<base>/<page>/
        //             req.url = `${base}/${req.params.page}/`;
        //             next('route');
        //         } else {
        //             next();
        //         }
        //     });
        // },
        proxy: {
            '/api': {
                target: 'http://hyperf-admin.com',
                changeOrigin: true
            }
        }
    },

    pages: {
        index: {
            entry: 'src/index/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: '世说新语',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
        },
        login: {
            entry: 'src/login/login.js',
            template: 'public/login.html',
            filename: 'login.html',
            title: '登录',
            chunks: ['chunk-vendors', 'chunk-common', 'login'],
        },
        home: {
            entry: 'src/home/home.js',
            template: 'public/home.html',
            filename: 'home.html',
            title: '首页',
            chunks: ['chunk-vendors', 'chunk-common', 'home'],
        }
    }

};