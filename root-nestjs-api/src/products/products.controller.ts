import {
  Controller,
  Inject,
  Post,
  Body,
  Get,
  Param,
  HttpException,
  Delete,
  Patch,
} from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreateProductDto } from "./dto/CreateProduct.dto";
import { lastValueFrom } from "rxjs";

@Controller("products")
export class ProductsController {
  constructor(@Inject("NATS_SERVICE") private natsClient: ClientProxy) {}

  @Post()
  async createUser(@Body() createUserDto: CreateProductDto) {
    console.log("createProductDto");
    const result = await lastValueFrom(
      this.natsClient.send({ cmd: "createProduct" }, createUserDto)
    );
    console.log(result);
    return result;
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    const product = await lastValueFrom(
      this.natsClient.send({ cmd: 'getProductById' }, { userId: id }),
    );
    if (product) {
      return product;
    } else {
      throw new HttpException('User Not Found', 404);
    }
  }

  // @Get(':id')
  // async getProductByVendorId(@Param('id') id: string) {
  //   const product = await lastValueFrom(
  //     this.natsClient.send({ cmd: 'getProductByVendorId' }, { vendorId: id }),
  //   );
  //   if (product) {
  //     return product;
  //   } else {
  //     throw new HttpException('User Not Found', 404);
  //   }
  // }


  @Get()
  async getAllProducts() {
    const products = await lastValueFrom(
      this.natsClient.send({ cmd: 'getAllProducts' }, {}),
    );
    if (!products) {
      throw new HttpException('No product found', 404);
    }
    return products;
  }

  @Delete(':id') // Define route parameter for user ID
  async deleteProductById(@Param('id') id: string) {
    const result = await lastValueFrom(
      this.natsClient.send({ cmd: 'deleteProduct' }, id),
    );
    return result; // Assuming this returns something meaningful
  }
}
