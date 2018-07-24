const routing = router => {
  router.get('*', ctx => {
    ctx.body = 'hey'
  })
}

module.exports = routing
