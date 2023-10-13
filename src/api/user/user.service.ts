import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'create This action adds a new user';
  }

  findAll() {
    return `find all This action returns all user`;
  }

  findOne(id: number) {
    return `find one This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `updated This action updates a #${id} user`;
  }

  remove(id: number) {
    return `remove This action removes a #${id} user`;
  }
}
