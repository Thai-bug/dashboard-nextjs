import bcrypt from 'bcryptjs'

import { User } from '@prisma/client';
import { IUserService } from '../interface/IUserService';
import { IUserRepository } from 'server/repository/interface/IUserRepository';
import { inject, injectable } from 'inversify';
import { TYPES } from 'utils/symbols';
@injectable()
export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(@inject(TYPES.UserRepository) userRepository: IUserRepository){
    this.userRepository = userRepository;
  }

  getOne(id: number): Promise<User | null> {
    return this.userRepository.getOne(id);
  }

  findMany(request: any): Promise<any> {
    return this.userRepository.getMany(request);
  }

  async create(request: any): Promise<any> {
    request.password = await bcrypt.hash(request.password as string, 10);
    return this.userRepository.create(request);
  }
}
