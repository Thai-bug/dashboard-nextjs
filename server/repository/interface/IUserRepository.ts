import { User } from '@prisma/client';

export interface IUserRepository{
  getOne(id: number): Promise<User | null>;

  getMany(request: any): Promise<any>;
}
