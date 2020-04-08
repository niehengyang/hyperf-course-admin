
// const path = require('path');

module.exports = {

    //防止eslint乱报错
    lintOnSave: false, // 关闭eslint
    runtimeCompiler: true,
    publicPath: '/',
    outputDir: 'dist',
    configureWebpack: {

    },
    devServer: {
        //devServer监听的端口
        port: 8080,
        https: false,
        //配置代理
        proxy: {
            //拦截的url
            '/api':{
                //转发到目标服务器的url
                target: "http://192.168.10.10:9501/",
                //是否代理websockets,可选
                ws: true,
                //是否修改Host头部，可选
                changeOrigin: true,
                //修改请求路径
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },

    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: '主体',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        login: {
            entry: 'src/login/login.js',
            template: 'public/login.html',
            filename: 'login.html',
            title: '登录',
            chunks: ['chunk-vendors', 'chunk-common', 'login']
        },
        home: {
            entry: 'src/home/home.js',
            template: 'public/home.html',
            filename: 'home.html',
            title: '首页',
            chunks: ['chunk-vendors', 'chunk-common', 'home']
        },
        error404: {
            entry: 'src/404error/main.js',
            template: 'public/error404.html',
            filename: 'error404.html',
            title: '页面未找到',
            chunks: ['chunk-vendors', 'chunk-common', 'error404']
        }
    }

};