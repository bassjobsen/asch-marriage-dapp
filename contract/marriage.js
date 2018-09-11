async function getStatus(address,field = 'spouse') {
  let option = {
    condition: {
    }
  }
  option.condition[field] = address
  let relation = await app.model.Marriage.findOne(option,['status']) 
  return relation.status
}

function mayMarry(address1, address2){
    if(typeof getStatus(address1,'address') === 'string' || typeof getStatus(address2) === 'string') {
      return false
    }  
    return true
}

function marry(address,spouse,height) {
    if(!mayMarry(address,spouse)) return false
    app.sdb.update('Marriage', {
       status: 'married'
    },{
        address: address        
    })
    app.sdb.update('Marriage', {
        date: height
    },{
        address: address
    })
   /*app.sdb.replace('Marriage', {
      address: address,
      spouse: spouse,
      status: 'married',
      date: height
    })*/
    return true
}

async function checkProposal(address, field = 'spouse') {
  let option = {
    condition: {
       status: 'proposed'
    }
  }
  option.condition[field] = address
  let proposal = await app.model.Marriage.findOne(option) 
  return proposal
}

module.exports = {
  propose: async function(address) {
    //lock
    // check if sender may marry
    if(!mayMarry(this.trs.SenderId, address)) {
      return 'Not able to do a propsal to ' + address
    }
    app.sdb.create('Marriage', {
        address: this.trs.senderId,
        spouse: address,
        status: 'proposed',
        date: this.block.height
    })
  },
  acceptPropose: async function() {
    let proposal = await checkProposal(this.trs.senderId);
    if(!proposal.address) return 'No proposal found!'   
    marry(proposal.address,this.trs.senderId,this.block.height)
},  
  rejectPropose: async function() {
    let proposal = await checkProposal(this.trs.senderId);
    if(!proposal) return 'No proposal found!'
    return app.sdb.del('Marriage', { spouse: this.trs.senderId })  
  },
  revokePropose: async function() {
    let proposal = await checkProposal(this.trs.senderId, 'address');
    if(!proposal) return 'No proposal found!'
    return app.sdb.del('Marriage', { address: this.trs.senderId }) 
  },      
  requestDivorce: async function() {
    //return this.trs.senderId
    let status = await getStatus(this.trs.senderId, 'address');
    if(status !== 'married') return 'You are not married!'
    return app.sdb.update('Marriage',{ status: 'divorceRequest' }, { address: this.trs.senderId }) 
  },
  requestDivorceSpouse: async function() {
    let status = await getStatus(this.trs.senderId);
    if(status !== 'married') return 'You are not married!'
    return app.sdb.update('Marriage',{ status: 'divorceRequestSpouse' }, { spouse: this.trs.senderId }) 
  },
  acceptDivorce: async function() {
    let status = await getStatus(this.trs.senderId, 'address');
    if(status !== 'divorceRequestSpouse') return 'You are not asked to divorce!'
    return app.sdb.del('Marriage', { address: this.trs.senderId }) 
  },
  acceptDivorceSpouse: async function() {
    let status = await getStatus(this.trs.senderId);
    if(status !== 'divorceRequest') return 'You are not asked to divorce!'
    return app.sdb.del('Marriage', { spouse: this.trs.senderId }) 
  }
}