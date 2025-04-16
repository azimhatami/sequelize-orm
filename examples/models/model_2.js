const { DataTypes } = require('@sequelize/core');
const { sequelize } = require('./../../configs/db.config');

const User = sequelize.define('user', {
  username: DataTypes.STRING(50),
  birthday: DataTypes.DATE,
  age: DataTypes.INTEGER
}, {
  modelName: 'user',
  // timestamps: false,
  // updatedAt: 'update_date',
  // createdAt: false,
  // freezeTableName: true,
  // tableName: 'users_test'
})


async function main() {
  await User.sync({ force: true })
  const user = await User.create({
    username: 'azimhatami',
    birthday: new Date('2004-2-4'),
    age: 21
  });

  console.log(user.dataValues);
}

main()
