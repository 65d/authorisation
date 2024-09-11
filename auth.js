const jwt = require('jsonwebtoken');

const { sequelize, models } = require('./databaseconect.js');



const SECRET_KEY = process.env.SECRET_KEY;

const authenticateToken = async (req, res, next) => {
  const token = req.cookies ? req.cookies.token : null;

  

  if (token == null) {
      return res.redirect('/login'); 
  } else{

    
        console.log(token);
        const islogin = await models.login.findOne({ where: { token: token, is_active: 1 } });

        if(!islogin) {
            res.clearCookie('token'); 
            res.redirect('/login');
        }
    
  }
  jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) return res.redirect('/login');
      req.user = user;
      next();
  });
};



module.exports = {
    authenticateToken
};
