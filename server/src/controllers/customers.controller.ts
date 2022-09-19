import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getAll() {
    return {
      message: 'Customers list',
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      message: `Customers: ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'New customers created',
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
