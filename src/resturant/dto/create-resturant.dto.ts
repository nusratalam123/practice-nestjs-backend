import { IsString, IsNumber, IsArray, IsOptional } from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  price: number;

  @IsString()
  countryName: string;

  @IsString()
  addressOfRestaurant: string;

  @IsArray()
  @IsString({ each: true }) // Ensures each array item is a string
  image_url: string[];

  @IsString()
  dishesName: string;

  @IsNumber()
  totalBookedItem: number;
}
