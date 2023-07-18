


/**    const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<h1>Hello Eid Mubarak</h1>')
        res.statusCode = 200
        res.end()
    } else{
        res.write('<h1>404 Not found</h1>')
        res.statusCode = 200
        res.end()
    }
})


server.listen(3333, () => {
    console.log('Server is listening on port 3333')
})
  */

/**
const express = require('express')

const app = express()

const books = [
{
    id:'1',
    name: 'Riko mia',
    price: 1000,
},{
    id:'2',
    name: 'Riko mia',
    price: 1100,
},{
    id:'3',
    name: 'তাসলিমা',
    price: 1500,
},{
    id:'4',
    name: 'Taslima',
    price: 5000,
},{
    id:'5',
    name: 'javascript book',
    price: 100,
},{
    id:'1',
    name: 'Riko mia',
    price: 1000,
},{
    id:'2',
    name: 'Riko mia',
    price: 1100,
},{
    id:'3',
    name: 'তাসলিমা',
    price: 1500,
},{
    id:'4',
    name: 'Taslima',
    price: 5000,
},{
    id:'5',
    name: 'javascript book',
    price: 100,
}
]

app.get('/books', (req, res) => {
    //Process Request
    //Response Generator
    console.log(req.query)
    if(req.query.show === 'all'){
        return res.json(books)
    }

    if(req.query.price == '500'){
        const result = books.filter((book) => book.price <= 500)
        return res.json(result)
    }
    if(req.query.price == '1000'){
        const result2 = books.filter((book) => book.price <= 1000)
        return res.json(result2)
    }
    
    
    return res.json(books)
    
})

app.post(`/books`, (res, req) => {
    // console.log(req.body)
    const book = req.body
    books.push(book)

    res.json(books)
})




app.listen('4000', () => {
    console.log('Server is listening on port 4000')
})
 */

/** ......
// Video 16 start now
const express = require('express')
// const path = require('path')


const app = express()

app.use(express.static(__dirname + '/public'))

//Middleware create start
const simpleLogger = (req, res, next ) => {
    console.log(`${req.url} - ${req.method} - ${new Date().toISOString()}`)
   /** res.send()
    const name = req.query.name
    if(name === 'riko'){
        return res.json({message: 'hi Riko...'})
    } 
    next()
}

// const secondMiddleware = (req, res, next) => {
//     console.log('I am second middleware')
//     next()
// }

// app.use([simpleLogger, secondMiddleware])
app.use(simpleLogger)


// router making start 
app.get('/hello', (req, res, next) => {
    res.json({message: 'Hello...'})

})


// app.get('/', (req,res,next) => {
//     res.json({message: 'Sweet home'})
// })



app.listen(3000, () => {
    console.log('Application running on port 3000...')
})
  */






require('dotenv').config()
const http = require('http')
const app = require('./app/app')

const server = http.createServer(app)

const PORT = process.env.Port || 8000
server.listen(PORT, () => {
    console.log(`server listing on Port ${PORT}`)
})




















