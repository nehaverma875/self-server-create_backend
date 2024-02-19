const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World neha!')
})
app.get('/Vizz',(req,res)=> {
  res.send('vizlabs')

})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})