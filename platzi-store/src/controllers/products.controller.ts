import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('')
  getProducts(
    @Query('limit') limit = 100, // Valor por defecto - Infiere el tipo de dato
    @Query('offset') offset = 10,
    @Query('brand') brand: string,
  ) {
    return `products | limit: ${limit} - offset: ${offset} - brand: ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    return `product filter endpoint`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
}
