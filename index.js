const express = require('express')

const app = express()
const port = proccess.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello Hidayat'))

app.listen(port)
