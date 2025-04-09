import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Login again.",
      });
    }

    const token = authHeader.split(" ")[1]; // Extract token after 'Bearer'

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!req.body) {
      req.body = {};
    }
    req.body.userId = token_decode.id;

    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};

export default authUser;
