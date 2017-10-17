"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var TimerService_1 = require("./TimerService");
var animations_1 = require("@angular/platform-browser/animations");
var angular2_busy_1 = require("angular2-busy");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [animations_1.BrowserAnimationsModule, angular2_busy_1.BusyModule.forRoot(new angular2_busy_1.BusyConfig({
                    message: 'Time is running out!',
                    backdrop: false,
                    template: "<div style=\"text-align:center;position:absolute;font-size:26px;z-index: 100;width:250px;text-shadow:1px 1px 2px white, -1px -1px 2px white,-4px 4px 4px white,-4px 4px 4px white\">{{message}}</div>",
                    delay: 200,
                    minDuration: 600,
                    wrapperClass: 'my-class'
                }))],
            declarations: [app_component_1.AppComponent],
            providers: [TimerService_1.TimerService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map