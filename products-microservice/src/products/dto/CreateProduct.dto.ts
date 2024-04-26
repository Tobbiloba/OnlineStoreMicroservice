export class CreateProductDto {
    productName: string;
    productDescription: string;
    productImages: string[];
    productAmount: string;
    vendorId: string;
    productCategory: string;
    productType: "new" | "used";
    productCount: number;
}