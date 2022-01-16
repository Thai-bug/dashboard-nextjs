import { NextApiResponse } from "next";

interface IResponse {
  statusCode: number;
  result: any;
  message?: string;
}

export const response = (response: NextApiResponse, responseInfo: IResponse) => {
  response.status(responseInfo.statusCode).json(responseInfo)
  return response.end();
}