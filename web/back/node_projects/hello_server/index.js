import express from 'express'
import fs from 'fs'

const app = express()

const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    fs.readFile('./html/home.html', 'utf8', 
    (err, html) => {
        if (err) {
            res.status(500).send('An error occurred: ' + err)
            return
        }
        console.log('Sending page...')
        res.send(html)
        console.log('Page sent')
    })
})



app.get('/person', (req, res) => 
{
    console.log('hello server')
    const person = {
        name : "Kevin",
        email : "A01174634@etec.mx",
        message : "Hello world from server"
    }
    res.json(person)    
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)    
})