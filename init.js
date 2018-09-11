module.exports = async function () {
  console.log('enter dapp init')

  app.registerContract(1001, 'marriage.propose')
  app.registerContract(1002, 'marriage.acceptPropose')
  app.registerContract(1003, 'marriage.rejectPropose')
  app.registerContract(1004, 'marriage.revokePropose')
  app.registerContract(1005, 'marriage.requestDivorce')
  app.registerContract(1006, 'marriage.requestDivorceSpouse')
  app.registerContract(1007, 'marriage.acceptDivorce')
  app.registerContract(1008, 'marriage.acceptDivorceSpouse')

  app.events.on('newBlock', (block) => {
    console.log('new block received', block.height)
  })
}