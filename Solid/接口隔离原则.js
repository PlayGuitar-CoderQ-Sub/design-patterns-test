"use strict";
var AlibabaCloud = /** @class */ (function () {
    function AlibabaCloud() {
        this.storeFile = function (name) { };
        this.getFile = function (name) { };
        this.createServer = function (region) { };
        this.listServers = function (region) { };
        this.getCDNAddress = function () { };
    }
    return AlibabaCloud;
}());
// 假设腾讯云没有实现部分接口
var TencentCloud = /** @class */ (function () {
    function TencentCloud() {
        this.storeFile = function (name) { };
        this.getFile = function (name) { };
        this.createServer = function (region) { }; // 未实现
        this.listServers = function (region) { }; // 未实现
        this.getCDNAddress = function () { }; // 未实现
    }
    return TencentCloud;
}());
var AlibabaCloudNew = /** @class */ (function () {
    function AlibabaCloudNew() {
        this.storeFile = function (name) { };
        this.getFile = function (name) { };
        this.createServer = function (region) { };
        this.listServers = function (region) { };
        this.getCDNAddress = function () { };
    }
    return AlibabaCloudNew;
}());
// TODO: 重新实现 腾讯云
var TencentCloudNew = /** @class */ (function () {
    function TencentCloudNew() {
        this.storeFile = function (name) { };
        this.getFile = function (name) { };
    }
    return TencentCloudNew;
}());
