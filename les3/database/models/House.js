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
            allowNull: false,
        }
    }, {
        tableName:'house',
        timestamps: false
    });

    return House;
};