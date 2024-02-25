import mongoose from "mongoose";

const UserSchema = new mongoose.Schema ({
    name:String,
    email:String,
    password:String,
    lastName : {
        type:String,
        default:"lastName",
    },
   
   
});

UserSchema.methods.toJSON =  function () { //delete the password when we send the user object
    let obj = this.toObject();
    delete obj.password;
    return obj;
}

export default mongoose.model("User",UserSchema);