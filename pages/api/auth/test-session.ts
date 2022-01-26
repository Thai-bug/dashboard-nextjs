
import { NextApiRequest, NextApiResponse } from "next";
import { decodeToken, encodeToken } from "utils/auth";

import { response } from "utils/handler";

export default async (req: NextApiRequest, res: NextApiResponse) => {
const decoded = decodeToken(req.headers.authorization?.split(' ')[1]);
console.log(decoded);

response(res, {
  statusCode: 200,
  result: encodeToken('thai')
})
}