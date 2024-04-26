import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../typeorm/Category';
import { Injectable, Inject } from '@nestjs/common';
import { CreateCategoryDto } from './dtos/CreateCategory.dto';
// import { lastValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @Inject('NATS_SERVICE') private natsClient: ClientProxy,
  ) {}

  async createCategory({ userId, ...createCategory }: CreateCategoryDto) {
    try {
      console.log(userId);
      console.log(createCategory);

      const user = await this.natsClient.send(
        { cmd: 'getUserById' },
        { userId },
      );

      console.log(user);

      if (!user) {
        console.log('User not found');
        return { msg: 'User not found' };
      }

      console.log('User exists');

      const newCategory = this.categoryRepository.create({
        ...createCategory,
        userId,
      });

      console.log(newCategory);
      return this.categoryRepository.save(newCategory);
    } catch (error) {
      console.error('Error occurred:', error);
      return { msg: 'An error occurred while creating the category' };
    }
    // const user;
    // console.log(userId);
    // console.log(createCategory);

    // const user = await this.natsClient.send({ cmd: 'getUserById' }, { userId });

    // console.log(user);

    // if (!user) {
    //   console.log('user doesnt exist');
    //   return { msg: 'User not found' };
    // }
    // console.log('user exits');

    // const newCategory = this.categoryRepository.create({
    //   ...createCategory,
    //   userId,
    // });

    // console.log(newCategory);
    // return this.categoryRepository.save(newCategory);
  }

  async getAllCategories() {
    try {
      const categories = this.categoryRepository.find();
      return categories;
    } catch (error) {
      return { msg: 'An error occurred while creating the category' };
    }
  }

  async updateCategoryCount(categoryId: string) {
    try {
      const category = await this.categoryRepository.findOne({
        where: { id: categoryId },
      });

      if (!category) {
        return { msg: 'Category not found' };
      }

      category.productCount += 1; // Increment product count

      await this.categoryRepository.save(category);

      return category;
    } catch (error) {
      console.error(
        'An error occurred while updating the category count:',
        error,
      );
      return { msg: 'An error occurred while updating the category count' };
    }
  }
}
