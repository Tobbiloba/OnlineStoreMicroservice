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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMicroServiceController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const CreateProduct_dto_1 = require("./dto/CreateProduct.dto");
const products_service_1 = require("./products.service");
let ProductMicroServiceController = class ProductMicroServiceController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    createProduct(data) {
        return this.productsService.createProduct(data);
    }
    getAllProducts() {
        return this.productsService.getAllProducts();
    }
    getProductsByVendorId(data) {
        const productId = data;
        return this.productsService.getProductByVendorId(productId);
    }
    deleteProduct(data) {
        const productId = data;
        return this.productsService.deleteProductById(productId);
    }
    updateProduct(data) {
        return this.productsService.updateProductById(data.productId, data.updateProductDto);
    }
};
exports.ProductMicroServiceController = ProductMicroServiceController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "createProduct" }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateProduct_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductMicroServiceController.prototype, "createProduct", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "getAllProducts" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductMicroServiceController.prototype, "getAllProducts", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "getAllProducts" }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductMicroServiceController.prototype, "getProductsByVendorId", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "deleteProduct" }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductMicroServiceController.prototype, "deleteProduct", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "updateProductById" }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductMicroServiceController.prototype, "updateProduct", null);
exports.ProductMicroServiceController = ProductMicroServiceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductMicroServiceController);
//# sourceMappingURL=products.controller.js.map