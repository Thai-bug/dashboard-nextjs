import { NextApiRequest, NextApiResponse } from 'next';

interface User{
  name: string;
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  let user;
  if (req.method === 'POST') {
    user = req.body as User;
  }
  res.status(200).json({ name: 'John Doe' });
};
