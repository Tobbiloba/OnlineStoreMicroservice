import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Products } from "../typeorm/entities/Products";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dto/CreateProduct.dto";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productRepository: Repository<Products>
  ) {}

   createProduct(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create(createProductDto);
    return this.productRepository.save(newProduct);
  }

  async getProductById(productId: string): Promise<Products | undefined> {
    return await this.productRepository.findOne({
      where: { id: productId },
    });
  }

  async getAllProducts(): Promise<Products[]> {
    return await this.productRepository.find();
  }

  async getProductByVendorId(vendorId: string): Promise<Products | undefined> {
    return await this.productRepository.findOne({
      where: { vendorId: vendorId },
    });
  }

  async updateProductById(
    productId: string,
    updateProductDto: CreateProductDto
  ): Promise<Products | null> {
    const product = await this.productRepository.findOne({
      where: { vendorId: productId },
    });
    if (!product) {
      throw new NotFoundException(`Product with ID ${productId} not found`);
    }
    Object.assign(product, updateProductDto);
    return await this.productRepository.save(product);
  }

  async deleteProductById(productId: string): Promise<void> {
    const result = await this.productRepository.delete(productId);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID ${productId} not found`);
    }
  }
}
