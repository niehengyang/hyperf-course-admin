const TokenStorageKey = (window.location.hostname || "smtmonitor") + "_token";

let setToken = function (token) {
    return localStorage.setItem(TokenStorageKey , token);
};

let getToken = function () {
    return localStorage.getItem(TokenStorageKey);
};

let clearToken = function () {
    return localStorage.removeItem(TokenStorageKey);
};

export default {
    setToken : setToken,
    getToken : getToken,
    clearToken : clearToken
}