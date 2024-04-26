import { Repository } from "typeorm";
import { Products } from "../typeorm/entities/Products";
import { CreateProductDto } from "./dto/CreateProduct.dto";
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: Repository<Products>);
    createProduct(createProductDto: CreateProductDto): Promise<Products>;
    getProductById(productId: string): Promise<Products | undefined>;
    getAllProducts(): Promise<Products[]>;
    getProductByVendorId(vendorId: string): Promise<Products | undefined>;
    updateProductById(productId: string, updateProductDto: CreateProductDto): Promise<Products | null>;
    deleteProductById(productId: string): Promise<void>;
}
