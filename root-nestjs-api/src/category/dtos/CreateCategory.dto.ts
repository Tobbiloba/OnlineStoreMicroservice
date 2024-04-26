import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  categoryName: string;

  @IsNotEmpty()
  @IsNumber()
  itemCount: number;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
