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
var core_1 = require('@angular/core');
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'APP/login.component.html',
            styles: ["\n        .container-fluid {\n            background: url(http://www.skystarventures.com/wp-content/uploads/2014/03/White-Background.jpg) no-repeat center center fixed;\n            height: 100%;\n        }\n        .form-signin {\n            max-width: 330px;\n            padding: 15px;\n            margin: 0 auto;\n        }\n        .form-signin .form-signin-heading,\n        .form-signin .checkbox {\n            margin-bottom: 10px;\n        }\n        .form-signin .checkbox {\n            font-weight: normal;\n        }\n        .form-signin .form-control {\n            position: relative;\n            height: auto;\n            -webkit-box-sizing: border-box;\n                -moz-box-sizing: border-box;\n                    box-sizing: border-box;\n            padding: 10px;\n            font-size: 16px;\n        }\n        .form-signin .form-control:focus {\n            z-index: 2;\n        }\n        .form-signin input[type=\"email\"] {\n            margin-bottom: -1px;\n            border-bottom-right-radius: 0;\n            border-bottom-left-radius: 0;\n        }\n        .form-signin input[type=\"password\"] {\n            margin-bottom: 10px;\n            border-top-left-radius: 0;\n            border-top-right-radius: 0;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map