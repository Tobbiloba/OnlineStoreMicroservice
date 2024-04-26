import { CreateProductDto } from "./dto/CreateProduct.dto";
import { ProductsService } from "./products.service";
export declare class ProductMicroServiceController {
    private productsService;
    constructor(productsService: ProductsService);
    createProduct(data: CreateProductDto): Promise<import("../typeorm/entities/Products").Products>;
    getAllProducts(): Promise<import("../typeorm/entities/Products").Products[]>;
    getProductsByVendorId(data: any): Promise<import("../typeorm/entities/Products").Products>;
    deleteProduct(data: any): Promise<void>;
    updateProduct(data: {
        productId: string;
        updateProductDto: CreateProductDto;
    }): Promise<import("../typeorm/entities/Products").Products>;
}
