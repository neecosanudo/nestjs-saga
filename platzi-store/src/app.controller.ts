import { Controller, Get, Param } from '@nestjs/common';
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

  @Get('products/:productId')
  getProducts(@Param('productId') productId: string) {
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
