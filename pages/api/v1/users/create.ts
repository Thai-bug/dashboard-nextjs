import { NextApiRequest, NextApiResponse } from "next";
import { container } from "server/bind";
import { validateCreateUser } from "server/schema-validate/user";
import { IUserService } from "server/service/interface/IUserService";
import { response } from "utils/handler";
import { TYPES } from "utils/symbols";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let userService: IUserService = container.get(TYPES.UserService);
  if (req.method?.toLowerCase() === 'post') {
    let request = req.body;
    try {
      await validateCreateUser.validateAsync(request);
    } catch (e: any) {
      return res.status(400).json({
        message: e.message
      })
    }

    const newUser = await userService.create(request);

    return response(res, {
      statusCode: 200,
      message: 'created',
      result: newUser
    })
  }

  if (req.method?.toLowerCase() === 'get') {
    return response(res, {
      statusCode: 400,
      message: 'error',
      result: null
    })
  }
}