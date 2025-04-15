const { Model, DataTypes } = require('@sequelize/core');
const { sequelize } = require('./../../configs/db.config');

class User extends Model {}

User.init({
  username: DataTypes.STRING(50),
  birthday: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'user',
  // timestamps: false,
  // updatedAt: 'update_date',
  // createdAt: false
})


async function main() {
  await User.sync({ force: true })
  const user = await User.create({
    username: 'azimhatami',
    birthday: new Date('2004-2-4'),
  });

  console.log(user.dataValues);
}

main()
