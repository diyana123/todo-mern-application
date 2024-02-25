import { UnauthenticatedError, UnauthorizedError } from "../Errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req,res,next) => {
    //console.log(req.cookies);
const {token} = req.cookies;
if (!token) throw new UnauthenticatedError("Authentication invalid");

try {
    const {userId} = verifyJWT(token);
    // console.log(user);
    req.user = {userId}
    next();
} catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
   
}
}

//This middleware function checks for the presence of a JWT (JSON Web Token) in the req.cookies.

