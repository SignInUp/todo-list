import { Sequelize } from 'sequelize'
import userModel from '../models/user'
import todoModel from '../models/todo'

const sequelize = new Sequelize('todo_list', 'postgres', '5482', {
  dialect: 'postgres',
  host: 'localhost',
  protocol: 'postgres',
  ssl: false,
  dialectOptions: {
    rejectUnauthorized: false
  },
  define: {
    timestamps: false
  }
})

export const user = sequelize.define('user', userModel)
export const todo = sequelize.define('todo', todoModel)

user.hasMany(todo)

export default () => {
  sequelize.sync({ force: true }).then(result => console.log(result))
    .catch(err => console.log(err))
}
export const dataProvider = sequelize
