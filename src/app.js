import express from 'express'

const app = express();
const port = process.env.PORT ?? 1234;

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/index.html')
})

app.listen((port), (req, res) => {
  console.log(`Server listening on port http://localhost:${port}`)
})