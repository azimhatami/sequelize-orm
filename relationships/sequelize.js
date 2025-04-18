const { Sequelize } = require('@sequelize/core');
const { MySqlDialect } = require('@sequelize/mysql');


const sequelize = new Sequelize({
  dialect: MySqlDialect,
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'mysqlrootpass1',
  database: 'sequelizedb',
  logging: false
});


sequelize.authenticate().then(
  async () => {
    await sequelize.sync({force: true});
    console.log('Database connected successfully');
  }
).catch(
  (error) => {
    console.log('Unable to connect to the database: ', error?.message);
  }
)

module.exports = {
  sequelize,
}
