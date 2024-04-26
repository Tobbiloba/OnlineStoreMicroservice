import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { NatsClientModule } from "src/nats-client/nats-client.module";

@Module({
    imports: [NatsClientModule],
    controllers: [CategoryController],
    providers: [],
  })
  export class CategoryModule {}
  