import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola Mundo!';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100, // Valor por defecto - Infiere el tipo de dato
    @Query('offset') offset = 10,
    @Query('brand') brand: string,
  ) {
    return `products | limit: ${limit} - offset: ${offset} - brand: ${brand}`;
  }

  @Get('products/filter')
  getProductFilter() {
    return `product filter endpoint`;
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('categories/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return `Product ${productId} and category ${categoryId}`;
  }
}
