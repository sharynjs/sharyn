import axios from 'axios'
import { startServer, stopServer } from '../../packages/koa'

const main = async () => {
  startServer()
  const { data } = await axios.get('http://localhost:8021')
  console.log(data)
  stopServer()
}

main()
