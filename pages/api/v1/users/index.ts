import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { paginationValidation } from 'server/schema-validate/pagination';
import UserService from 'server/service/class/UserService';

interface IUser {
  fullname: string;
  email: string;
  password: string;

}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method?.toLowerCase() === 'post') {
    const request = req.body;
    try {
      const validate = await paginationValidation.validateAsync(request);
    } catch (e: any) {
      return res.status(400).json({
        message: e.message
      })
    }

    const users = await UserService.findMany(request);
    return res.json({
      statusCode: 200,
      result: users
    })
  }
};
