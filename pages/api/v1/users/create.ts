import { NextApiRequest, NextApiResponse } from "next";
import { validateCreateUser } from "server/schema-validate/user";
import UserService from "server/service/class/UserService";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method?.toLowerCase() === 'post') {
    let request = req.body;
    try{
      await validateCreateUser.validateAsync(request);
    } catch(e: any){
      return res.status(400).json({
        message: e.message
      })
    }

    const newUser = await UserService.create(request);

    return res.status(200).json('created')
  }

  if (req.method?.toLowerCase() === 'get') {
    res.status(404);
    return res.end();
  }
}