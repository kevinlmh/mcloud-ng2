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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var FileService = (function () {
    function FileService(http) {
        this.http = http;
        this.filesUrl = 'http://localhost:5000/api/v1';
    }
    FileService.prototype.getFiles = function () {
        return this.http.get(this.filesUrl)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    FileService.prototype.getFile = function (id) {
        console.log('GET ' + this.filesUrl + '/download/' + id);
        this.http.get(this.filesUrl + '/download/' + id);
    };
    FileService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    FileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FileService);
    return FileService;
}());
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map