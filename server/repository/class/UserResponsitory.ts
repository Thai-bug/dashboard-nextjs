import { PrismaClient, User } from '@prisma/client';
import { IUserRepository } from '../interface/IUserRepository';

export class UserReponsitory implements IUserRepository {
  private prisma = new PrismaClient();
  getOne(id: number): Promise<any> {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
      select: {
        email: true,
        role: {
          select: {
            title: true,
            id: true,
          },
        },
      },
    });
  }

  async getMany(request: any): Promise<any> {
    const user = await this.prisma.user.findMany({
      ...request
    })
    const count = await this.prisma.user.count()
    return {
      data: user,
      count: count
    }
  }

  async create(request: any): Promise<any> {
    const user = await this.prisma.user.create({
      data: {
        ...request
      }
    });
    console.log(user);

    return user;
  }
}
