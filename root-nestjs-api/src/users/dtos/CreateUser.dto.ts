import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsOptional,
  IsEmail,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class Address {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  state: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  country: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  address: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  postalCode: string;
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(32)
  username: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(32)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(32)
  lastName: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsOptional()
  @IsString()
  @MaxLength(64)
  displayName?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Address)
  address: Address;
}
