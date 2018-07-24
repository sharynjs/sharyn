import axios from 'axios'
import { startServer, stopServer } from '../../packages/koa'

const routing = router => {
  router.get('*', ctx => {
    ctx.body = 'hey'
  })
}

const main = async () => {
  startServer(routing)
  const { data } = await axios.get('http://localhost:8021')
  console.log(data)
  stopServer()
}

main()
