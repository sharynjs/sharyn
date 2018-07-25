const routing = router => {
  router.get('*', ctx => {
    ctx.body = 'hey'
  })
}

export default routing
