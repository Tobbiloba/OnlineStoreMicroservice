import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersMicroserviceController {
  constructor(private usersService: UsersService) {}
  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    console.log('create users');
    return this.usersService.createUser(data);
  }

  @MessagePattern({ cmd: 'getUserById' })
  getUserById(@Payload() data) {
    const { userId } = data;
    return this.usersService.getUserById(userId);
  }

  @MessagePattern({ cmd: 'allUsers' })
  getAllUsers() {
    console.log('get all users');
    return this.usersService.getAllUsers();
  }

  @MessagePattern({ cmd: 'deleteUserById' })
  deleteUserById(@Payload() data) {
    const { userId } = data;
    console.log('delete user by id');
    return this.usersService.deleteUserById(userId);
  }

  @MessagePattern({ cmd: 'updateUserById' }) // Correcting the decorator
  updateUserById(
    @Payload() data: { userId: string; updateUserDto: CreateUserDto },
  ) {
    console.log('update user by id');
    return this.usersService.updateUserById(data.userId, data.updateUserDto);
  }

  @EventPattern('paymentCreated')
  paymentCreated(@Payload() data: any) {
    console.log(data);
  }
}
