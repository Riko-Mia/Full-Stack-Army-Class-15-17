// MongoDB password {fHg9zcR6TT25t2xG}


const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const pollController = require("./views/pollController")

const app = express()

app.set('view engine', 'ejs')


app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// app.get('/create', (req, res)  => {
//     res.render('create')
// })


app.get('/create', pollController.createPollGetController)
app.post('/create', pollController.createPollPostController)


app.get("/polls/:id",pollController.viewPollGetController)
app.post("/polls/:id",pollController.viewPollPostController)
app.get('/polls', pollController.getAllPolls)




app.get('/', (req, res) =>{

   res.render('home')
})

mongoose.connect('mongodb://127.0.0.1:27017/Full-Stack-ARM-Class-15-Home-work')
    .then(() => {
        app.listen(5000, () => {
            console.log('Application is ready to serve on port 5000')
        })
    })
    .catch(e => {
        console.log(e)
    })









