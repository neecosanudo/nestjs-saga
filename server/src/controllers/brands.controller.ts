import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getAll() {
    return {
      message: 'Brands list',
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      message: `Brand: ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'New brand created',
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
