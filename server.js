const express = require('express')
const port = 3200

const tugasEnpoint = require('./routes/tugasRoutes')

const app = express()

app.use('/tugas', tugasEnpoint)



app.listen(port, () => console.log(`port running to ${port}`))