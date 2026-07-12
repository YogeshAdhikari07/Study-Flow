const jwt = require('jsonwebtoken')
const auth = async (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        res.redirect('/page/logsign')
    }
    const user = jwt.verify(token,process.env.JWT_SECRET);
    req.user = user;

    next();
};
module.exports = auth;