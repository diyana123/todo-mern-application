import jwt from 'jsonwebtoken';

export const createJWT = (payload) => {
    const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN});
    return token;
}

export const verifyJWT = (token) => {
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    return decoded;
}

//When a user successfully logs in, a JWT is generated and sent to the client. The client includes this token in subsequent requests, and the server can verify and extract information from the token to authenticate and authorize the user.