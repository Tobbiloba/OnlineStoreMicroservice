import { ClientProxy } from '@nestjs/microservices';
import { CreatePaymentDto } from './dto/CreatePayment.dto';
export declare class PaymentsController {
    private natsClient;
    constructor(natsClient: ClientProxy);
    getPayments(): import("rxjs").Observable<any>;
    createPayment(createPaymentDto: CreatePaymentDto): void;
}
