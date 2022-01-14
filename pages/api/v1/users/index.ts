import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

interface IUser {
  fullname: string;
  email: string;
  password: string;

}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient()
  const user = await prisma.user.findMany();

  res.status(200).json(user);
};
