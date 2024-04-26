import { Module } from '@nestjs/common';
import { CartModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './typeorm/Category';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      database: 'nestjs_db',
      entities: [Cart],
      synchronize: true,
      username: 'testuser',
      password: 'testuser123',
    }),
    CartModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
