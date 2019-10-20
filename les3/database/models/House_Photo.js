module.exports = (sequelize, DataTypes) => {
    const House_Photo = sequelize.define('House_Photo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        house_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        photo_path: {
            type: DataTypes.STRING,
        }
    },
        {
        tableName: 'house_photo',
        timestamps: false
    });

    const House = sequelize.import('./House.js');
    House_Photo.belongsTo(House, {foreignKey: 'house_id'});

    return House_Photo;
};