var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var OtherListComponent = (function () {
    function OtherListComponent() {
        this.otherItems = [
            {
                id: 1,
                name: "firebug",
                medium: "series",
                category: "Science Fiction",
                year: 2010,
                watchedOn: 1294166565384,
                isFavorite: false
            },
            {
                id: 2,
                name: "the OA",
                medium: "series",
                category: "science Fiction",
                year: 2016,
                watchedOn: "1/12/2016",
                isFavorite: false
            }
        ];
    }
    OtherListComponent.prototype.onOtherItemDelete = function (otherItem) { };
    return OtherListComponent;
}());
OtherListComponent = __decorate([
    Component({
        selector: 'app-other-list',
        templateUrl: './other-list.component.html',
        styleUrls: ['./other-list.component.css']
    }),
    __metadata("design:paramtypes", [])
], OtherListComponent);
export { OtherListComponent };
//# sourceMappingURL=../../../../src/app/other-list/other-list.component.js.map