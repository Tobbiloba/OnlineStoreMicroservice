import { Module } from "@nestjs/common";
import { CartController } from "./cart.controller";
import { NatsClientModule } from "src/nats-client/nats-client.module";

@Module({
    imports: [NatsClientModule],
    controllers: [CartController],
    providers: [],
  })
  export class CartModule {}
  