import express from 'express'
import path from 'path'
import colors from 'colors'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.use('/www', express.static(path.join(__dirname, '..', 'public')))

app.get('*', (req, res) => {
  res.status(200).render('index')
})

app.listen(port, () => {
  console.log(`\napp is running on port ${colors.bold(port)}\n`.cyan)
})
