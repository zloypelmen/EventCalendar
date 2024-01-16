const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Event = sequelize.define('event', {
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, unique: false, allowNull: true},
    label: {type: DataTypes.STRING, allowNull: false, defaultValue: "indigo"},
    day: {type: DataTypes.BIGINT, defaultValue: 0},
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const ChangeLog = sequelize.define('changeLog', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: true },
    description: { type: DataTypes.TEXT, allowNull: true },
});

User.hasMany(Event)
Event.belongsTo(User)

module.exports = {
    User,
    Event,
    ChangeLog,
}