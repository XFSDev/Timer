"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimerService = (function () {
    function TimerService() {
    }
    TimerService.prototype.GetMilisecond = function (value) {
        return this.AddZero((value) % 100);
    };
    TimerService.prototype.GetSeconds = function (value) {
        return this.AddZero(Math.floor(value / 100) % 60);
    };
    TimerService.prototype.GetMinutes = function (value) {
        return this.AddZero(Math.floor(value / 6000) % 60);
    };
    TimerService.prototype.AddZero = function (value) {
        return value <= 9 ? '0' + value : value;
    };
    return TimerService;
}());
exports.TimerService = TimerService;
//# sourceMappingURL=TimerService.js.map