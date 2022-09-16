import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('')
  getAll(
    @Query('limit') limit = 100, // Valor por defecto - Infiere el tipo de dato
    @Query('offset') offset = 10,
    @Query('brand') brand: string,
  ) {
    return {
      message: `limit: ${limit} - offset: ${offset} - brand: ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: 'Product filter endpoint',
    };
  }

  @Get(':productId')
  getOne(@Param('productId') productId: string) {
    return {
      message: `product ${productId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'New product created',
      payload: payload,
    };
  }
}
