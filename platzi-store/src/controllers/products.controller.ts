import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('')
  getAll(
    @Query('limit') limit = 100, // Valor por defecto - Infiere el tipo de dato
    @Query('offset') offset = 10,
    @Query('brand') brand: string,
  ) {
    /* return {
      message: `limit: ${limit} - offset: ${offset} - brand: ${brand}`,
    }; */
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: 'Product filter endpoint',
    };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId') productId: string) {
    /* response.status(200).send({
      message: `product ${productId}`,
    }); */
    return this.productsService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: any) {
    /* return {
      message: 'New product created',
      payload: payload,
    }; */
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    /* return {
      id,
      payload,
    }; */
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    /* return { id }; */
    return this.productsService.delete(+id);
  }
}
