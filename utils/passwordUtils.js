import bcrypt from 'bcryptjs';

export const hashPassword = async (password) => {
const salt = await bcrypt.genSalt(10);  //A salt is a random data that is combined with the password before hashing to prevent precomputed attacks , 10 represents the complexity of hashing
const hashedPassword = await bcrypt.hash(password , salt);
return hashedPassword;
}

export const comparePassword = async (password,hashedPassword) => { //to compare the provided plain-text password with hashed password
    const isMatch = await bcrypt.compare(password,hashedPassword);
    return isMatch;
}