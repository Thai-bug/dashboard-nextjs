import jwt from 'jsonwebtoken';

export const encodeToken = (token: any) =>{
  return jwt.sign(token, '123')
}

export const decodeToken = (token: any) =>{
  return jwt.verify(token, '123')
}