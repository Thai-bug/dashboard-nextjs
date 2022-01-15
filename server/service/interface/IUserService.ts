import { User } from '@prisma/client';

export interface IUserService{
  getOne(id: number): Promise<User | null>;

  findMany(request: any): Promise<any>;

  create(request: any): Promise<any>;
}
