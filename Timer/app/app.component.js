"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var TimerService_1 = require("./TimerService");
var core_2 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent(_TimerService) {
        this._TimerService = _TimerService;
        this.milliseconds = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.ticks = 0;
        this.button1 = "START";
        this.LapTimeTable = [];
        this.LapTimeIndex = 0;
    }
    AppComponent.prototype.start = function () {
        var _this = this;
        if (this.button1 == "START") {
            var timer = Rx_1.Observable.timer(1, 10);
            this.busy = timer.subscribe(function (t) {
                _this.ticks = t;
                _this.milliseconds = _this._TimerService.GetMilisecond(_this.ticks);
                _this.seconds = _this._TimerService.GetSeconds(_this.ticks);
                _this.minutes = _this._TimerService.GetMinutes(_this.ticks);
            });
            this.button1 = "STOP";
        }
        else {
            this.busy.unsubscribe();
            this.LapTimeTable = [];
            this.button1 = "START";
        }
    };
    AppComponent.prototype.LapTime = function () {
        var date = this.minutes + ":" + this.seconds + ":" + this.milliseconds;
        if (this.LapTimeTable.length >= 5) {
            this.LapTimeTable.splice(this.LapTimeIndex, 1, date);
            if (this.LapTimeIndex >= 4) {
                this.LapTimeIndex = 0;
            }
            else {
                this.LapTimeIndex++;
            }
        }
        else {
            this.LapTimeTable.push(date);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.ticks = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.milliseconds = 0;
    };
    AppComponent = __decorate([
        core_2.Injectable(),
        core_1.Component({
            selector: 'app',
            templateUrl: "app/app.component.html",
            providers: [TimerService_1.TimerService],
            styleUrls: ["Content/styles.css", "../node_modules/angular2-busy/build/style/busy.css"]
        }),
        __metadata("design:paramtypes", [TimerService_1.TimerService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map