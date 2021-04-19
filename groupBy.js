var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var _a;
var groupBy = function (data, callback) {
    return data.reduce(function (res, item) {
        var _a;
        var key = callback(item);
        return __assign(__assign({}, res), (_a = {}, _a[key] = res[key] ? __spreadArray(__spreadArray([], res[key]), [item]) : [item], _a));
    }, {});
};
var resNum = groupBy([1.2, 1.1, 2.3, 0.4], Math.floor);
var expectResNum = {
    "0": [0.4],
    "1": [1.2, 1.1],
    "2": [2.3]
};
console.log(resNum);
var resLength = groupBy(["one", "two", "three"], function (el) { return el.length; });
var expectResLength = {
    "3": ["one", "two"],
    "5": ["three"]
};
console.log(resLength);
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var resGender = groupBy([
    { g: Gender.Male, n: "A" },
    { g: Gender.Female, n: "B" },
    { g: Gender.Female, n: "C" },
], function (el) { return el.g; });
var expectResGender = (_a = {},
    _a[Gender.Male] = [{ g: Gender.Male, n: "A" }],
    _a[Gender.Female] = [
        { g: Gender.Female, n: "B" },
        { g: Gender.Female, n: "C" },
    ],
    _a);
console.log(resGender);
