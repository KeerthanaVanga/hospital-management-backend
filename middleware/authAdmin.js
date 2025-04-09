import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Login again.",
      });
    }

    const token = authHeader.split(" ")[1];

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Assuming the token payload contains an email and password
    const isValidAdmin =
      token_decode.email === process.env.ADMIN_EMAIL &&
      token_decode.password === process.env.ADMIN_PASSWORD;

    if (!isValidAdmin) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Invalid admin credentials.",
      });
    }

    next();
  } catch (error) {
    console.error("Admin Auth error:", error.message);
    res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};

export default authAdmin;
