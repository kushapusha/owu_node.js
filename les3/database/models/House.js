module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        city: {
            type: DataTypes.STRING,
        },
        street: {
            type: DataTypes.STRING,
        },
        rooms: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        users_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName:'house',
        timestamps: false
    });

    const User = sequelize.import('./User.js');
    House.belongsTo(User, {foreignKey: 'user_id'});

    return House;
};