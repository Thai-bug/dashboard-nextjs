import { NextApiRequest, NextApiResponse } from 'next';
import { paginationValidation } from 'server/schema-validate/pagination';
import {container } from 'server/bind';
import { response } from 'utils/handler';
import { IUserService } from 'server/service/interface/IUserService';
import { TYPES } from 'utils/symbols';

interface IUser {
  fullname: string;
  email: string;
  password: string;

}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let UserService: IUserService = container.get<IUserService>(TYPES.UserService);

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
    return response(res, {
      statusCode: 200,
      result: users,
    });
  }

  return response(res,{
    statusCode:400,
    result: null
  })
};
