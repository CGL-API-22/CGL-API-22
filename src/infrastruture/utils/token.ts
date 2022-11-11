import jwt from 'jsonwebtoken';

const generateToken = (payload: any, secret: string) => {
  const token = jwt.sign(payload, secret)
  return token;
}

const verifyToken = (payload: any, secret: string) => {
  const result = jwt.verify(payload, secret);

  if(!result){
    return false;
  }

  return true;
}

export {
  generateToken,
  verifyToken,
}