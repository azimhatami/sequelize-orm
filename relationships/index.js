const { sequelize } = require('./sequelize');
const { User, Profile } = require('./model');
const { Task } = require('./task');

async function main() {
  await sequelize.sync({force: true});
  const user = await User.create({
    email: 'hamed@gmail.com',
    password: 'hamed2235'
  });

  const profile = await Profile.create({
    firstname: 'Azim',
    lastname: 'Hatami',
    bio: 'This is a bio for me',
  });

  await user.setProfile(profile);

  //console.log(await User.findAll({raw: true, include: {
  //  model: Profile,
  //  attributes: ['firstname', 'bio'],
  //}}));

  //const user1 = await User.findByPk(1);
  //console.log(user1.dataValues);
  //console.log(await user1.getProfile({raw: true, attributes: ['firstname', 'lastname']}));

  await Task.bulkCreate([
    {
      title: 'Task one',
      description: 'Description task one',
      userId: user.id
    },
    {
      title: 'Task two',
      description: 'Description task two',
      userId: user.id
    },
    {
      title: 'Task three',
      description: 'Description task three',
      userId: user.id
    },
  ]);

  const tasks = await user.getTasks({raw: true});

  console.log(tasks);

}


main()
