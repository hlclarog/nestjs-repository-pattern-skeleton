import { Column, Entity } from 'typeorm';
import { Base } from '../../../_base/entities/base.entity';

@Entity('users')
export class User extends Base {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
