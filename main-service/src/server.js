const express = require('express');

const app  = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(express.json())
app.use(cookieParser());


const mainRouter = Router();




app.get('/', (req, res) => {
    console.log("Main service called");

    res.send("Root Service asdase dfsdfd asdasd!");
});

app.use('/api/v1/auth', require('./routes/auth'))

app.listen(3000, () => {
    console.log('Main service started on port 3000')
})


mainRouter.use('/', userRouter);