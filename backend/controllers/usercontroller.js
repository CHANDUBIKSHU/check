const jwt = require("jsonwebtoken");

// Default credentials (ideally store in .env)
const DEFAULT_EMAIL = "admin@example.com";
const DEFAULT_PASSWORD = "password123";

// Login controller
exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email & password required",
    });
  }

  if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
   const token = jwt.sign(
  { email },
  process.env.JWT_SECRET,  // same secret as middleware
  { expiresIn: "1h" }
);


    return res.json({
      success: true,
      message: "Login successful",
      token,
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
};
