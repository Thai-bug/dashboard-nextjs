import 'reflect-metadata';
import{
  Container
} from 'inversify';
import { IUserService } from './service/interface/IUserService';
import { IUserRepository } from './repository/interface/IUserRepository';
import { UserReponsitory } from './repository/class/UserResponsitory';
import { UserService } from './service/class/UserService';
import { TYPES } from 'utils/symbols';

export let container = new Container();

container.bind<IUserRepository>(TYPES.UserRepository).to(UserReponsitory).inSingletonScope();
container.bind<IUserService>(TYPES.UserService).to(UserService).inSingletonScope();