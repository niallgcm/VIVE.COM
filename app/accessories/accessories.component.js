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
var core_1 = require("@angular/core");
var productSvc_injectable_1 = require("../services/productSvc.injectable");
var AccessoriesComponent = (function () {
    function AccessoriesComponent(productService) {
        this.productService = productService;
    }
    AccessoriesComponent.prototype.addToCart = function (id, quantity) {
        console.log("Product ID: " + id + ',  Quantity: ' + quantity);
        this.productService.addToCart(id, quantity);
    };
    AccessoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProductInfo()
            .subscribe(function (res) { return _this.products = res; });
    };
    ;
    return AccessoriesComponent;
}());
AccessoriesComponent = __decorate([
    core_1.Component({
        styleUrls: ['app/accessories/accessories.component.css'],
        templateUrl: 'app/accessories/accessories.component.html',
        providers: [productSvc_injectable_1.ProductService]
    }),
    __metadata("design:paramtypes", [productSvc_injectable_1.ProductService])
], AccessoriesComponent);
exports.AccessoriesComponent = AccessoriesComponent;
//# sourceMappingURL=accessories.component.js.map