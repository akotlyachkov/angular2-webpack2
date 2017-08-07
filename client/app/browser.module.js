"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_module_1 = require("./app.module");
const default_1 = require("./layouts/default/default");
let BrowserAppModule = class BrowserAppModule {
};
BrowserAppModule = __decorate([
    core_1.NgModule({
        bootstrap: [default_1.DefaultLayout],
        imports: [
            platform_browser_1.BrowserModule.withServerTransition({
                appId: 'my-app-id'
            }),
            app_module_1.AppModule
        ]
    })
], BrowserAppModule);
exports.BrowserAppModule = BrowserAppModule;
//# sourceMappingURL=browser.module.js.map