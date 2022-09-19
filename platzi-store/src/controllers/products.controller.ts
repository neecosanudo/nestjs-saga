import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from 'src/services/products.service';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

@Controller('products')
export class ProductsController {
  // Product service injection.
  constructor(private productsService: ProductsService) {}

  /**
   * Get all products.
   * @returns Array with products.
   */
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  /**
   * Get one product by ID.
   * @param id Number.
   * @returns The required product.
   */
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  findOne(
    @Param(
      'id', // Parse parameter to integer or return an error response.
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.productsService.findOne(id);
  }

  /**
   * Create a new product.
   * @param payload CreateProductDto.
   * @returns The new created product.
   */
  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  /**
   * Update a product by ID.
   * @param id Number.
   * @param payload UpdateProductDto.
   * @returns The updated product.
   */
  @Put(':id')
  update(
    @Param(
      'id', // Parse parameter to integer or return an error response.
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(id, payload);
  }

  /**
   * Delete a product by ID.
   * @param id Number.
   * @returns Boolean: true.
   */
  @Delete(':id')
  delete(
    @Param(
      'id', // Parse parameter to integer or return an error response.
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.productsService.delete(id);
  }
}
