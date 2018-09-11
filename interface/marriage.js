app.route.get('/status/:address',  async function (req) {
    let status = await app.model.Marriage.findOne({address: req.params.address})
    if (!status) status = await app.model.Marriage.findOne({spouse: req.params.address})
    return status
})