const { DataTypes, Op, Sequelize, sql } = require('@sequelize/core');
const { sequelize } = require('./../../configs/db.config');

const usersList = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    username: 'johndoe',
    age: 28,
    birthday: '1995-03-15',
    bio: 'Software developer and coffee enthusiast'
  },
  {
    id: 2,
    firstname: 'ali',
    lastname: 'Smith',
    username: 'ali',
    age: 32,
    birthday: '1991-07-22',
    bio: 'Graphic designer and art lover'
  },
  {
    id: 3,
    firstname: 'Michael',
    lastname: 'Johnson',
    username: 'mikej',
    age: 25,
    birthday: '1998-11-05',
    bio: null
  },
  {
    id: 4,
    firstname: 'Emily',
    lastname: 'Williams',
    username: 'emilyw',
    age: 30,
    birthday: '1993-09-18',
    bio: 'Travel blogger and photographer'
  },
  {
    id: 5,
    firstname: 'David',
    lastname: 'Brown',
    username: 'davidb',
    age: 22,
    birthday: '2001-01-30',
    bio: 'University student studying computer science'
  },
  {
    id: 6,
    firstname: 'Sarah',
    lastname: 'Miller',
    username: 'sarahm',
    age: 35,
    birthday: '1988-12-10',
    bio: 'Marketing professional and yoga instructor'
  },
  {
    id: 7,
    firstname: 'Robert',
    lastname: 'Wilson',
    username: 'robert',
    age: 40,
    birthday: '1983-05-25',
    bio: 'Entrepreneur and startup mentor'
  },
  {
    id: 8,
    firstname: 'Lisa',
    lastname: 'Taylor',
    username: 'lisat',
    age: 27,
    birthday: '1996-08-14',
    bio: null
  },
  {
    id: 9,
    firstname: 'mmdreza',
    lastname: 'Anderson',
    username: 'mmdreza',
    age: 31,
    birthday: '1992-04-03',
    bio: 'Chef and food critic'
  },
  {
    id: 10,
    firstname: 'Jennifer',
    lastname: 'Thomas',
    username: 'jennyt',
    age: 29,
    birthday: '1994-10-19',
    bio: 'Doctor and health advocate'
  }
];

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstname: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true
  },
}, {
  timestamps: false,
});


async function main() {
  await User.sync({ force: true }).then(() => {
    console.log('synced user');
  })
  await User.bulkCreate(usersList);

  const user1 = await User.findOne({
    where: {
      id: 1
    }
  });

//  user1.firstname= 'Azim';
//  await user1.save();
//  await user1.reload()
//  await user1.update({
//    lastname: 'Hatami',
//    username: 'testup'
//  });
//  console.log(user1.toJSON());
  
  await User.update(
    {username: 'himo'}, 
    {
      where: {
        id: 1
      },
    }
  )

  const himo = await User.findByPk(1, {raw: true});
  console.log(himo);

}

main()
