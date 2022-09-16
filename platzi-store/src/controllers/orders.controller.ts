import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getAll() {
    return {
      message: 'Orders list',
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      message: `Orders: ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'New orders created',
      payload: payload,
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
