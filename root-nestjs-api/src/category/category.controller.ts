import { Controller, Inject, Post, Body, Get, Param, HttpException,Delete } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCategoryDto } from './dtos/CreateCategory.dto';
import { lastValueFrom } from "rxjs";
@Controller('cart')
export class CategoryController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

    @Get() 
    getAllCategories() {
        return this.natsClient.send({cmd: 'getAllCategories'}, {})
    }

    @Post()
    async createUser(@Body() createCategoryDto: CreateCategoryDto) {
      console.log("createProductDto");
      const result = await lastValueFrom(
        this.natsClient.send({ cmd: "createCategory" }, createCategoryDto)
      );
      console.log(result);
      return result;
    }

    // @Get(':id')
    // async getCartByUserId(@Param('id') id: string) {
    //   const categor = await lastValueFrom(
    //     this.natsClient.send({ cmd: 'getCartByUserId' }, { userId: id }),
    //   );
    //   if (cartItems) {
    //     return cartItems;
    //   } else {
    //     throw new HttpException('User Not Found', 404);
    //   }
    // }

    // @Delete(':id') // Define route parameter for user ID
    // async deleteUserCart(@Param('id') id: string) {
    //   const result = await lastValueFrom(
    //     this.natsClient.send({ cmd: 'deleteCartByUserId' }, id),
    //   );
    //   return result; // Assuming this returns something meaningful
    // }
}