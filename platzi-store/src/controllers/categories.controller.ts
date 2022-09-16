import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

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

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return { id };
  }
}
