const db = require("../model")
const { isEmpty, find } = require("lodash");

const { users } = db;
exports.getAllAccount = async (req, res) => {
    try {
        const allAccountDetails = await users.find({});
        res.status(200).json({ message: "Ok", data: allAccountDetails });
      }
    catch (error) {
      res
        .status(500)
        .json({ message: "Please try after some time", Error: error });
    }
};

exports.updateAccount = async (req, res) => {
    try {
        const countOfRecord = await users.count({phoneNo:req.params.phoneNo});
        if(countOfRecord === 1){
            const updateRecord = await users.updateOne({phoneNo:req.params.phoneNo},
                {$set:{
                    firstName:req.body.firstName,
                    lastName:req.body.lastName,
                    age:req.body.age
                }}
                );
            res.status(200).json({message:"Updated successfully",data:updateRecord});
        }else{
            res.status(404).json({message:"Phone number not availale"});
        }
    } catch (error) {
        res
        .status(500)
        .json({ message: "Please try after some time", Error: error });
    }
};

exports.findOneRecord = async (req, res) => {
    try {
        const accountDetail = await users.findOne({phoneNo:req.params.phoneNo});
        res.status(200).send({message:"Ok",data:accountDetail});
    } catch (err) {
        res.status(404).json({
            message:"Record not found",
            Error : err
        });
    }
};

exports.addAccount = async (req, res) =>{
    try {
        const findAccount = await users.find({phoneNo:req.body.phoneNo});
        if(!isEmpty(findAccount)){
            res.status(403).json({message:"Account already exist with this phone number"});
        }else{
            const accountDetails = new users({
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                phoneNo : req.body.phoneNo,
                age : req.body.age
            })
            const addAccountDetails = await accountDetails.save();
            res.status(200).json({message:"Account created successfully",data:addAccountDetails});
        }

        } catch (error) {
        res
        .status(500)
        .json({ message: "Failed to add account", Error: error });
    }
}

exports.deleteAccount = async (req, res) => {
    try {
        const updateRecord = await users.deleteOne({phoneNo:req.params.phoneNo});
        res.status(200).json({message:"Deleted successfully",data:updateRecord});
    } catch (error) {
        res
        .status(500)
        .json({ message: "Failed to delete account", Error: error });
    }
};