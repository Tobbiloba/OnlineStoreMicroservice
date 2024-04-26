import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  productName: string;

  @IsNotEmpty()
  @IsString()
  productDescription: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  productImages: string[];

  @IsNotEmpty()
  @IsString()
  productAmount: string;

  @IsNotEmpty()
  @IsString()
  vendorId: string;

  @IsNotEmpty()
  @IsString()
  productCategory: string;

  @IsNotEmpty()
  @IsString()
  productType: "new" | "used";

  @IsNotEmpty()
  productCount: number;
}



// {
//   "username": "Tobiloba",
//   "displayName": "Tobbiee",
//   "firstName": "Oluwatobiloba",
//   "lastName": "Salau",
//   "email": "tobiloba.salau",
//   "address": {
//       "country": "Nigeria",
//       "state": "Lagos",
//       "address": "No 16 oraka street",
//       "postalCode": "102222"
//   },
//   "phoneNumber": "070458880954"
// }