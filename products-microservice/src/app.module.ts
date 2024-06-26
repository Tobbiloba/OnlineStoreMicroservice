import { Module } from '@nestjs/common';
import { ProductModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './typeorm/entities/Products';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      database: 'nestjs_db',
      entities: [Products],
      synchronize: true,
      username: 'testuser',
      password: 'testuser123',
    }),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}