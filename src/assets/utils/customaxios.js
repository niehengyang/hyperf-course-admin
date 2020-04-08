/**
 *
 * 定制Axios
 * 统一的错误错误
 * 相应数据格式统一处理
 * 统一的token头添加
 *
 */
import Vue from 'vue'

import TokenFactory from './tokenfactory';

//错误时的提示信息
const errorTip = msg => {
    Vue.prototype.$message.error(msg);
};

//跳转到登录页
const toLogin = ()=>{
    window.location.href = '/login'
};

//跳转到404页面
const to404Page = ()=>{
    window.location.href = '/error404'
};

//请求失败的错误统一处理
const errorHandler = (status,msg)=>{
    switch (status){
        case 401:
            //token校验失败后 ，清除token
            Vue.prototype.$message({
                type : "error",
                message : '登录超时，请重新登录。3秒后将跳回登录页',
                onClose:() => {
                    TokenFactory.clearToken();
                    toLogin();
                }
            });
            break;
        case 404:
            //请求出错
            to404Page();
            break;

        default:
            errorTip(msg);

        // case 400: msg = '请求错误(400)'; break;
        // case 401: msg = '未授权，请重新登录(401)'; break;
        // case 403: msg = '拒绝访问(403)'; break;
        // case 404: msg = '请求出错(404)'; break;
        // case 408: msg = '请求超时(408)'; break;
        // case 500: msg = '服务器错误(500)'; break;
        // case 501: msg = '服务未实现(501)'; break;
        // case 502: msg = '网络错误(502)'; break;
        // case 503: msg = '服务不可用(503)'; break;
        // case 504: msg = '网络超时(504)'; break;
        // case 505: msg = 'HTTP版本不受支持(505)'; break;
        // default: msg = `连接出错(${status})!`;
    }
};

 // 请求拦截器
axios.interceptors.request.use(
    config => {
        if (TokenFactory.getToken()) { //判断token是否存在
            config.headers = {
                'Authorization': 'Bearer'+' '+TokenFactory.getToken(),
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

//响应拦截器
axios.interceptors.response.use(res =>{

    if (res.data.code != 200){
        errorHandler(res.data.code,res.data.msg);
    }else{
        //请求成功时
        return res.data;
    }
},error => {
    //请求失败时
    if (error.response){
        errorHandler(error.response.status,error.response.data.message);
    }
    return Promise.reject(error);
});
