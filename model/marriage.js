module.exports = {
  name: 'marriages',
  fields: [
    {
      name: 'address',
      type: 'String',
      length: 256,
      not_null: true,
      index: true
    },
    {
      name: 'spouse',
      type: 'String',
      length: 256,
      not_null: true,
      index: true
    },
    {
      name: 'status',
      type: 'String',
      length: 50,
    },
    {
      name: 'date',
      type: 'Number',
      length: 10,
    }
  ]
}