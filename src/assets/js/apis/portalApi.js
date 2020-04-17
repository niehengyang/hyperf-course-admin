/**
 * 网站相关Api
 * @type {{initData: portalApi.initData}}
 */

const portalApi = {

    /* 获取网站初始化数据 */
    initData:function (callback) {
        return axios.get("/api/account/initdata");
    }

};

export default portalApi;