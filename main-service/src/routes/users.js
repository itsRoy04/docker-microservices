const { Router } = require('express');
const authMiddleware = require('./middleware/authMiddleware');


const userRouter = Router();

usersRouter.post("/user", async (req, res) => {
    try {

        console.log(req.body)
       
    } catch (error) {
        console.log("Error User", error);
    }
});


module.exports = userRouter;

