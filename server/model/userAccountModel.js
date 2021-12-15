module.exports = (mongoose) => {
    const User = mongoose.model("users",
        mongoose.Schema(
            {
                firstName : {type : String, require : true},
                lastName : {type : String, require : true},
                phoneNo : {type : Number, require : true, unique : true},
                age : {type : Number, require : true}
            },{
                timestamps : true
            }
        ))
    return User;
}