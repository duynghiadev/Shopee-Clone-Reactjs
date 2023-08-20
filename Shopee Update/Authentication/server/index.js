import express from 'express'
import router from './routes.js'
import chalk from 'chalk'
import config from './config.js'
import fs from 'fs'
import cors from 'cors'

const dbExist = fs.existsSync('./database.json')
if (dbExist) {
  console.log(chalk.green(`Kết nối database thành công`))
} else {
  console.log(chalk.red(`Không phát hiện file database.json`))
  console.log(chalk.cyan(`Server sẽ tiến hành khởi tạo database`))
  fs.writeFile(
    './database.json',
    JSON.stringify(config.initialDatabase),
    (err) => {
      if (err) throw console.log(chalk.red(`Khởi tạo database thất bại!`))
      console.log(
        chalk.green(`Khởi tạo database thành công và kết nối thành công`)
      )
    }
  )
}

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('', router)

app.listen(config.port, () => {
  console.log(chalk.yellowBright(`Đang chạy server trên port ${config.port}`))
})
