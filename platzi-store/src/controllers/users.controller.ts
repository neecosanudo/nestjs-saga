import { Controller, Get, Param, Post, Body } from '@nestjs/common';

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
}
