import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductMicroServiceController } from "./products.controller";
import { ProductsService } from "./products.service";
import { Products } from "src/typeorm/entities/Products";
import { NatsClientModule } from 'src/nats-client/nats-client.module';
@Module({
    imports: [TypeOrmModule.forFeature([Products]), NatsClientModule],
    controllers: [ProductMicroServiceController],
    providers: [ProductsService],
})
export class ProductModule {}