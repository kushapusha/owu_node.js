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
            validate: {
                notEmpty: true,
            }
        },
        street: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        rooms: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
                isNumeric: true
            }
        },
        users_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName:'house',
        timestamps: false
    });

    return House;
};