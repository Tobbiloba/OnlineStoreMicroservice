import { Controller, Inject } from "@nestjs/common";
import { EventPattern, MessagePattern, Payload, ClientProxy } from "@nestjs/microservices";
import { CreateProductDto } from "./dto/CreateProduct.dto";
import { ProductsService } from "./products.service";

@Controller()
export class ProductMicroServiceController {
  // constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy, private productsService: ProductsService) {}
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy, private productsService: ProductsService) {}
  @MessagePattern({ cmd: "createProduct" })
  createProduct(@Payload() data: CreateProductDto) {
    const vendorId = data.vendorId;
    const vendor = this.natsClient.emit('getUserById', data.vendorId);

    // if(!vendor) {
    //   return {msg: 'Vendor doesnt exist'}
    // }
    return this.productsService.createProduct(data);
  }

  @MessagePattern({ cmd: "getAllProducts" })
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @MessagePattern({ cmd: "getProductByVendorId" })
  getProductsByVendorId(@Payload() data) {
    const vendorId = data;
    return this.productsService.getProductByVendorId(vendorId);
  }

  @MessagePattern({ cmd: "deleteProduct" })
  deleteProduct(@Payload() data) {
    const productId = data;
    return this.productsService.deleteProductById(productId);
  }

  @MessagePattern({ cmd: "updateProductById" }) // Correcting the decorator
  updateProduct(
    @Payload() data: { productId: string; updateProductDto: CreateProductDto }
  ) {
    // console.log(updateUserDto);
    return this.productsService.updateProductById(
      data.productId,
      data.updateProductDto
    );
  }
}
