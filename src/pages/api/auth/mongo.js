import connectMongo from "Database/server"
import Users from "Model/Schema"
import {hash} from "bcryptjs"

export default async function handler(req,res){
  connectMongo().catch(function(err){ res.json({error:"Connection Failed!"})})

  if(req.method == "POST"){
    if(!req.body) return res.status(404).json({error:"isi dulu bodynya"})
    const{username, password} = req.body

    // CHECK DUPLICATE USERS
    const checkExisting = await Users.findOne({username})
    if(checkExisting) return res.status(422).json({message:"udah ada usernamenya!"})

    // HASH PASSWORD
    // Users.create({username, password: await hash(password, 12)}, function(err, data) {
      
    //   // if(err) return res.status(404).json({err})
    //   // res.status(201).json({status:true, user:data})
    // })
    Users.create({username, password: await hash(password, 12)})
      .then((result)=> {
        res.status(201).json({status:true, user:result})
      })
      .catch((err)=>{
        return res.status(404).json({err})
      })
    
   

  }else{
    res.status(500).json({message:"HTTP METHOD NOT VALID, ONLY POST"})
  }
}