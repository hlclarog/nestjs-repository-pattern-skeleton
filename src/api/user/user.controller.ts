import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseController } from '../../_base/base.controller';

@Controller('user')
export class UserController extends BaseController {
  constructor(readonly userService: UserService) {
    super(userService);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.append(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.all();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.find(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.edit(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.delete(id);
  }
}
