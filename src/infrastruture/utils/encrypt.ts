import bcrypt from 'bcryptjs';

const hash = async (password: any) => {

const salt = await bcrypt.genSalt(10);

 return bcrypt.hash(
    password, 
    salt
);
}

const compareHash = async (password: any, dbpassword: any) => {

  if(await bcrypt.compare(password, dbpassword)){
    return true
  }
  
  return false

}

export {
  hash,
  compareHash
}