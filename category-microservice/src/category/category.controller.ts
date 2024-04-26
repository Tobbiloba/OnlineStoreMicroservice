import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateCategoryDto } from './dtos/CreateCategory.dto';
import { CategoryService } from './category.service';

@Controller()
export class CartMicroserviceController {
  constructor(private categoryService: CategoryService) {}

  @MessagePattern({ cmd: 'createCategory' })
  createCart(@Payload() data: CreateCategoryDto) {
    return this.categoryService.createCategory(data);
  }

  @MessagePattern({ cmd: 'getAllCategories' })
  getAllCartItems() {
    return this.categoryService.getAllCategories();
  }

  @MessagePattern({ cmd: 'updateCategoryCount' })
  updateCategoryCount(@Payload() data) {
    const categoryId = data;
    return this.categoryService.updateCategoryCount(categoryId);
  }

  // @MessagePattern({ cmd: 'getCartItemByUserId' })
  // getCartItemByUserId(@Payload() data) {
  //   const { userId } = data;
  //   return this.cartService.getCartByUserId(userId);
  // }
}
