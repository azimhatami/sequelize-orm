const { DataTypes } = require('@sequelize/core');
const { sequelize } = require('./sequelize');


const User = sequelize.define('user', {
  email: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {timestamps: false});


const Profile = sequelize.define('profile', {
  firstname: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  lastname: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true
  },
});

User.hasOne(Profile, {
  foreignKey: {
    name: 'profileId',
    unique: true,
    onDelete: 'CASCADE'
  },
  sourceKey: 'id'
});

module.exports = {
  User,
  Profile
};
