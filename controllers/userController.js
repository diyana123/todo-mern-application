import { StatusCodes } from "http-status-codes";
import User from "../models/UserModal.js";


export const getCurrentUser = async (req,res) => {   //get he current user whos loggedin
    const user = await User.findOne({_id:req.user.userId}); //get the user has this id
    const userWithoutPassword = user.toJSON(); //convert to json
    res.status(StatusCodes.OK).json({userWithoutPassword})
}
