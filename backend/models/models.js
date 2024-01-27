const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Event = sequelize.define('event', {
    title: {type: DataTypes.STRING, unique: false, allowNull: false},
    description: {type: DataTypes.STRING, unique: false, allowNull: true},
    label: {type: DataTypes.STRING, allowNull: false, defaultValue: "indigo"},
    day: {type: DataTypes.BIGINT, defaultValue: 0},
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Label = sequelize.define('label', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    color: { type: DataTypes.STRING, allowNull: false, defaultValue: "indigo" },
});


const ChangeLog = sequelize.define('changeLog', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: true },
    description: { type: DataTypes.TEXT, allowNull: true },
});

const Action = sequelize.define('action', {
    title: {type: DataTypes.STRING, unique: false, allowNull: false},
    description: {type: DataTypes.STRING, unique: false, allowNull: true},
    label: {type: DataTypes.STRING, allowNull: false, defaultValue: "indigo"},
    day: {type: DataTypes.BIGINT, defaultValue: 0},
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    author: { type: DataTypes.STRING, allowNull: true },
    location: { type: DataTypes.STRING, allowNull: true },
});

const UserAction = sequelize.define('user_action',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasMany(Event)
Event.belongsTo(User)

User.belongsToMany(Action, {through: UserAction})
Action.belongsToMany(User, {through: UserAction})

module.exports = {
    User,
    Event,
    ChangeLog,
    Action,
    UserAction,
    Label,
}