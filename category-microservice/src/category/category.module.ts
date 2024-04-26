import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartMicroserviceController } from './category.controller';
import { CategoryService } from './category.service';
import { Category } from 'src/typeorm/Category';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
@Module({
  imports: [TypeOrmModule.forFeature([Category]), NatsClientModule],
  controllers: [CartMicroserviceController],
  providers: [CategoryService],
})
export class CartModule {}
