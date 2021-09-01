"use strict";
var MySQL = /** @class */ (function () {
    function MySQL() {
        this.database = {
            insert: function () { },
            update: function () { },
            delete: function () { }
        };
        this.open = function (date) { };
        this.save = function () { };
    }
    return MySQL;
}());
var MongoDB = /** @class */ (function () {
    function MongoDB() {
        this.database = {
            insert: function () { },
            update: function () { }
        };
        this.open = function (date) { };
        this.save = function () { };
    }
    return MongoDB;
}());
