import User from '../Model/user-model.js'
export const adduserindb = async(req , res)=>{
    const user = req.body ;
    const newUser =  new User(user) ;
    try{
        await newUser.save() ;
        return res.status(201).json(newUser);
    }
    catch(error){
        res.status(409).json({ message: error.message});  
    }
}
export const getalluser=async(req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);

    }
    catch(error){
        res.status(404).json({ message: error.message});  

    }

}

export const edituserdetails= async(req,res)=>{

    const user = req.body ;
    const newUser = new User(user) ;
    try{

        await User.updateOne({_id: req.params.id} , newUser)
        return res.status(200).json(newUser)

    }
    catch(error)
    {
        return res.status(404).json(error.message)
    }
}

export const getUserById = async (request, response) => {
    try{
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

export const deluser= async(req,res)=>{

    try{
        const user = await User.deleteOne({_id:req.params.id})
        return res.status(200).json(user) ;

    }
    catch(error){
        return res.ststud(404).json(error.message)
    }

}