import { StatusCodes } from "http-status-codes";
import User from "../models/UserModal.js";
import { hashPassword, comparePassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../Errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ mgs: "user created" });
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const isValidUser =
      user && (await comparePassword(req.body.password, user.password));

    if (!isValidUser) {
      throw new UnauthenticatedError("Invalid credentials");
    }

    const token = createJWT({userId:user._id,role:user.role});
  // res.send({ token});
    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: process.env.NODE_ENV === 'production',
    });

    res.status(StatusCodes.OK).json({ msg: "Login success" });
  } catch (error) {
    // Handle the error when the password is incorrect
    console.error(error); // Log the error for debugging purposes

    // Respond with an appropriate error message
    res.status(StatusCodes.UNAUTHORIZED).json({ error: "Invalid credentials" });
  }
};

// export const login = async (req, res) => {
//   const user = await User.findOne({ email: req.body.email });
//   const isValidUser =
//     user && (await comparePassword(req.body.password, user.password));

//   if (!isValidUser) throw new UnauthenticatedError("invalid credentials");
// const token = createJWT({userId:user._id});
//   // res.send({ token});
// const oneDay = 1000 * 60 * 60 * 24;

//   res.cookie('token',token,{
//     httpOnly:true,
//     expires:new Date(Date.now()+oneDay),
//     secure:process.env.NODE_ENV === 'production'
//   })
//   res.status(StatusCodes.OK).json({msg:"login success"})
// };

export const logout = (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};
