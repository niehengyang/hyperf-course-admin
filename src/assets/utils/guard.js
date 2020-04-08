/**
 * 统一登录监测
 */

import TokenFactory from "./tokenfactory";

if(!TokenFactory.getToken()){
    window.location.href = "/login";
}

