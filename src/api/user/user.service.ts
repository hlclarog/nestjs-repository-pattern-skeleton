import { Injectable } from '@nestjs/common';
import { BaseService } from '../../_base/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends BaseService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
    super();
  }
}
