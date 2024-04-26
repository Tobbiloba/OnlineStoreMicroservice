import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { CategoryModule } from './category/category.module';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://nats'],
        },
      },
    ]),
    UsersModule,
    PaymentsModule,
    ProductsModule,
    CartModule,
    CategoryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
