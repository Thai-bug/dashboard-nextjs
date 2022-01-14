import { User } from '@prisma/client';
import { UserReponsitory } from 'server/repository/class/UserResponsitory';
import { Service } from 'typedi';
import { IUserService } from '../interface/IUserService';


@Service()
class UserService implements IUserService {
  private userRepository = new UserReponsitory();

  getOne(id: number): Promise<User | null> {
    return this.userRepository.getOne(id);
  }

  findMany(request: any): Promise<any> {
      return this.userRepository.getMany(request);
  }
}

export default new UserService();
