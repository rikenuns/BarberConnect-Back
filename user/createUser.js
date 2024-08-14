const userModel = require("../schema/schema");


function ValidationUser(req, res, next) {
    const { name, email, password, dateYears } = req.body;

    if (!name) {
        return res.status(404).json({ msg: 'The name is required' });
    }

    if (!email) {
        return res.status(404).json({ msg: 'The email is required' });
    }

    if (!password) {
        return res.status(404).json({ msg: 'The password is required' });
    }

    if (!dateYears) {
        return res.status(404).json({ msg: 'The dateYears is required' });
    }

    next();
}
    
async function Check(req,res,next) {
    const{email}= req.body;

    const existUser = await userModel.findOne({email:email})


    if(existUser){
        return res.status(420).json({msg: "UserExist"})
    }
   
    next()
}

async function CreateUser(req,res) {
    const{ name, email,password,dateYears} =req.body

//add bcrypt depois abaixo

    const user = new userModel({name, email,password, dateYears})

    try {
        await user.save();
        res.status(200).jason({msg:'User create sucessfully!'});
        
    } catch (error) {
        console.error(error)
    }
}


