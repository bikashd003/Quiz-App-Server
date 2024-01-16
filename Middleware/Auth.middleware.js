import jwt from 'jsonwebtoken';
const isLoggedIn = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.status(401).json({
            message: "unauthorized"
        })
    }
    try {
        const admin = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = admin;
        next();

    } catch (error) {
        return res.status(401).json({
            message: "unauthorized"
        })
    }


}
export default isLoggedIn;