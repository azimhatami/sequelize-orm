const { DataTypes } = require('@sequelize/core');
const { sequelize } = require('./../../configs/db.config');

const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING(50),
    unique: true
  },
  fullname: DataTypes.STRING(50),
  password: DataTypes.STRING(16),
}, {
  timestamps: false,
  freezeTableName: true,
})


async function main() {
  await User.sync({ force: true })
  const user1 = await User.create({
    username: 'himo',
    fullname: 'Azim Hatami',
    password: 'himotest',
  }, {
    fields: ['fullname', 'username']
  });

  console.log(user1.dataValues);
  // console.log(user1.toJSON());
  const user2 = await User.build({
    username: 'rad8328',
    fullname: 'Amir Rad',
    password: 'sahg3'
  });

  // console.log(user2.dataValues);
  console.log(user2 instanceof User);
//  await user2.save().catch((err) => {
//    console.log(JSON.stringify(err, null, 4));
//  })
  await user2.save();
  console.log(user2.dataValues);

  const users = await User.bulkCreate([
    {username: 'mmd1', fullname: 'Mmd 1', password: 'test1'},
    {username: 'mmd2', fullname: 'Mmd 2', password: 'test2'},
    {username: 'mmd3', fullname: 'Mmd 3', password: 'test3'},
    {username: 'mmd4', fullname: 'Mmd 4', password: 'test4'},
    {username: 'mmd5', fullname: 'Mmd 5', password: 'test5'},
    {username: 'mmd6', fullname: 'Mmd 6', password: 'test6'},
  ]);

  const userList = users.map(user => {
    return user.dataValues;
  });

  console.log(userList);

  const [ user4, created ] = await User.findOrCreate({
    where: {username: 'zhr33'},
    defaults: {
      fullname: 'Zahra Hatami', 
      password: 'hatamiZ12'
    },
    fields: ['fullname'],
  });
  console.log(user4.dataValues, created);

}


main()
