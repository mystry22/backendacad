const jwt = require('jsonwebtoken');
require('dotenv').config();

const signToken = (data)=>{
    const payload = {email: data}
    const token = jwt.sign(payload,process.env.TOKEN_SECRET);
    return token;
}

const checkLogin = function(req,res,next){

    try{
      const token = req.headers.authorization;
      const splitToken = token.split(' ');
      const actualToken = splitToken[1];
      jwt.verify(actualToken, process.env.TOKEN_SECRET, (err, decodedToken) => {
        if (err) {
          res.json({'msg': 'Invalid Credentials'});
        } else {
          req.user = decodedToken
          next();
        }
      });
    
      
    }catch(err){
      
      res.json({'msg': 'Invalid Credentials'});
    }
  
  }

module.exports.signToken = signToken;
module.exports.checkLogin = checkLogin;
