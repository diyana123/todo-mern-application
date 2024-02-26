import { UnauthenticatedError, UnauthorizedError } from "../Errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req,res,next) => {
    //console.log(req.cookies);
const {token} = req.cookies;
if (!token) throw new UnauthenticatedError("Authentication invalid");

try {
    const {userId,role} = verifyJWT(token);
    // console.log(user);
    req.user = {userId,role}
    next();
} catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
   
}
}

export const authorizePermissions = (...roles) => { //giving access to the specific roles
    
    return (req,res,next)=>{
        if (!roles.includes(req.user.role)){
            throw new UnauthorizedError('Unauthorized to access this route')
        }
        // console.log(roles);
        next();
    }
   
}

//This middleware function checks for the presence of a JWT (JSON Web Token) in the req.cookies.

