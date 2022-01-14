import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient();
  const id = +req.query.id;

  const data = await prisma.user.findFirst({where:{
    id: id
  }});
  
  return res.json({
    result: data,
    statusCode: 200,
  });
}