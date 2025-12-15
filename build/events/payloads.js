"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pharmacy = exports.GoogleAnalyticsClientType = exports.ExternalRewardAction = exports.AnalyticsEventType = exports.Platform = void 0;
var Platform;
(function (Platform) {
    Platform["Android"] = "ANDROID";
    Platform["Ios"] = "IOS";
    Platform["Web"] = "WEB";
})(Platform = exports.Platform || (exports.Platform = {}));
var AnalyticsEventType;
(function (AnalyticsEventType) {
    AnalyticsEventType["UserProfile"] = "user-profile";
    AnalyticsEventType["UserCustom"] = "user-custom";
    AnalyticsEventType["UserPlatform"] = "user-platform";
    AnalyticsEventType["UserEvent"] = "user-event";
})(AnalyticsEventType = exports.AnalyticsEventType || (exports.AnalyticsEventType = {}));
var ExternalRewardAction;
(function (ExternalRewardAction) {
    ExternalRewardAction["ENROLL"] = "enroll";
    ExternalRewardAction["DISENROLL"] = "disenroll";
    ExternalRewardAction["REENROLL"] = "reenroll";
})(ExternalRewardAction = exports.ExternalRewardAction || (exports.ExternalRewardAction = {}));
var GoogleAnalyticsClientType;
(function (GoogleAnalyticsClientType) {
    GoogleAnalyticsClientType["WEB"] = "WEB";
    GoogleAnalyticsClientType["MOBILE"] = "MOBILE";
})(GoogleAnalyticsClientType = exports.GoogleAnalyticsClientType || (exports.GoogleAnalyticsClientType = {}));
var Pharmacy;
(function (Pharmacy) {
    Pharmacy["K24"] = "k24";
})(Pharmacy = exports.Pharmacy || (exports.Pharmacy = {}));
