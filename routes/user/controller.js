let users = require("../../models/users");

module.exports = {
  getUser: (req, res) => {
    res.status(200).json({
      message: "registered users list",
      users: users
    });
  },
  register: (req, res) => {
    try {
      const { name, email, password } = req.body;
      // tidak boleh kosong
      if (!name || !email || !password) {
        return res.status(400).json({
          message: "body cannot be empty"
        });
      }

      // tidak boleh sama
      const existedUser = users.find(user => user.email === email);

      if (existedUser) {
        return res.status(409).json({
          message: "user already registered, plese login"
        });
      }

      users.push({ name, email, password });
      res.status(201).json({
        message: "user successfully created",
        name,
        email
      });
    } catch (error) {
      return res.status(500).json({
        message: "error in register route",
        error: error.message
      });
    }
  },

  authentication: (req, res) => {
    try {
      const { email, password } = req.body;
      const existedUser = users.find(user => user.email === email);
      if (!existedUser) {
        return res.status(400).json({
          message: "Login Failed, wrong email!!"
        });
      }

      if (existedUser.password === password) {
        return res.status(200).json({
          message: "Login Sucsessfull",
          isLoggedIn: true,
          email,
          fakeId: 10201
        });
      } else {
        return res.status(400).json({
          message: "Login Failed, wrong password!!"
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "error in authentication route",
        error: error.message
      });
    }
  },
  logout: (req, res) => {
    return res.status(200).json({
      message: "Logout Sucsessfull",
      isLoggedIn: false
    });
  }
};
