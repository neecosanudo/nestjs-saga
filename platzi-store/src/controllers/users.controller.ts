import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAll() {
    return {
      message: 'Users list',
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      message: `Users: ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'New users created',
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
