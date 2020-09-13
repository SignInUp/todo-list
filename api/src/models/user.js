import { Sequelize } from 'sequelize'

export default {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(256),
    allowNull: false
  },
  emailConfirmed: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  passwordHash: {
    type: Sequelize.STRING(64),
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(64),
    allowNull: false
  },
  registeredAt: {
    type: Sequelize.DATE,
    allowNull: false
  }
}
