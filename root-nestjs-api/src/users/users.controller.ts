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
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { lastValueFrom } from 'rxjs';

@Controller('users')
export class UsersController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto');
    const result = await lastValueFrom(
      this.natsClient.send({ cmd: 'createUser' }, createUserDto),
    );
      console.log(result)
    return result; 
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await lastValueFrom(
      this.natsClient.send({ cmd: 'getUserById' }, { userId: id }),
    );
    if (user) {
      return user;
    } else {
      throw new HttpException('User Not Found', 404);
    }
  }

  @Get()
  async getAllUsers() {
    const users = await lastValueFrom(
      this.natsClient.send({ cmd: 'allUsers' }, {}),
    );
    if (!users) {
      throw new HttpException('No users found', 404);
    }
    return users;
  }

  @Patch(':id') // Define route parameter for user ID
  async updateUserById(
    @Param('id') id: string,
    @Body() updateUserDto: CreateUserDto,
  ) {
    const result = await lastValueFrom(
      this.natsClient.send(
        { cmd: 'updateUserById' },
        { userId: id, ...updateUserDto },
      ),
    );
    return result; // Assuming this returns something meaningful
  }

  @Delete(':id') // Define route parameter for user ID
  async deleteUserById(@Param('id') id: string) {
    const result = await lastValueFrom(
      this.natsClient.send({ cmd: 'deleteUserById' }, id),
    );
    return result; // Assuming this returns something meaningful
  }
}
