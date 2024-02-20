const AuthService = require('../services/auth.js')

class AuthController {
    static registerUser = async (req, res, next) => {
        try {
            const newUser = await AuthService.register(req.body)
            return res.status(201).json({message: "User Registered", data: newUser})
        } catch (err) {
            next(err)
        }
    }

    static loginUser = async (req, res, next) => {
        try {
            const user = await AuthService.login(req.body)
            return res.status(200).json({message: 'Login Success', data: user})
        } catch (err) {
            next(err)
        }
    }
}

module.exports = AuthController;