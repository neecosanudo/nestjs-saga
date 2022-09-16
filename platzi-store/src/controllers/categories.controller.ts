import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:productId')
  getProductByCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return {
      message: `Product by category`,
      product: productId,
      category: categoryId,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Category created',
      payload,
    };
  }
}
