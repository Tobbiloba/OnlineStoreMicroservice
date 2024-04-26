import { Controller, Inject, Post, Body, Get, Param, HttpException,Delete } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCartDto } from './dtos/CreateCart.dto';
import { lastValueFrom } from "rxjs";
@Controller('cart')
export class CartController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

    @Get() 
    getAllCart() {
        return this.natsClient.send({cmd: 'getAllCartItems'}, {})
    }

    @Post()
    async createUser(@Body() createCartDto: CreateCartDto) {
      console.log("createProductDto");
      const result = await lastValueFrom(
        this.natsClient.send({ cmd: "createCart" }, createCartDto)
      );
      console.log(result);
      return result;
    }

    @Get(':id')
    async getCartByUserId(@Param('id') id: string) {
      const cartItems = await lastValueFrom(
        this.natsClient.send({ cmd: 'getCartByUserId' }, { userId: id }),
      );
      if (cartItems) {
        return cartItems;
      } else {
        throw new HttpException('User Not Found', 404);
      }
    }

    @Delete(':id') // Define route parameter for user ID
    async deleteUserCart(@Param('id') id: string) {
      const result = await lastValueFrom(
        this.natsClient.send({ cmd: 'deleteCartByUserId' }, id),
      );
      return result; // Assuming this returns something meaningful
    }
}