const Sequelize = require('sequelize')
const db = require('../db')

const Products = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  breed: {
    type: Sequelize.STRING,
    allowNull: false
  },
  breeder: {
    type: Sequelize.STRING,
    allowNull: false
  },
  breederEmail: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    }
  },
  photos: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    validate: {
        isUrl: true
    },
    defaultValue: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQESkVtS1LQoEVN2-zr9ZlOeyndZbRD5DDrYfPnxcCOaOzFUV8w']
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 0
    }
  }
})

// TODO: instance method: to decrement inventory

// THINK ABOUT: class method find by breed, find by breeder (implemented in API not class method)

module.exports = Products