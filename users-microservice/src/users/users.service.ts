import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/User';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  getUserById(userId: string) {
    return this.usersRepository.findOne({
      where: { id: userId },
      relations: ['payments'],
    });
  }
  getAllUsers() {
    return this.usersRepository.find();
  }

  getUserByEmail(email: string) {
    return this.usersRepository.findOne({
      where: { email },
      relations: ['payments'],
    });
  }

  updateUserById(userId: string, updateUserDto: CreateUserDto) {
    // First, fetch the user by ID
    return this.usersRepository
      .findOne({ where: { id: userId } })
      .then((user) => {
        if (!user) {
          // If user with given ID is not found, return null or handle accordingly
          return null;
        }
        // Update the user object with the new data
        Object.assign(user, updateUserDto);
        // Save the updated user object
        return this.usersRepository.save(user);
      })
      .catch((error) => {
        // Handle errors, e.g., log them or throw a custom exception
        console.error('Error updating user:', error);
        throw error; // or throw a custom exception
      });
  }

  deleteUserById(userId: string) {
    return this.usersRepository.delete(userId);
  }
}
