module.exports = (sequelize, DataTypes) => {

    const archieveData = sequelize.define("archievedata", {
        subtype: {
            type: DataTypes.STRING,
            notNull: true,
            required: true,
        },
        type: {
            type: DataTypes.STRING,
            required: true,
            notNull: true,
        },
        url: {
            type:DataTypes.STRING,
            notNull: true,
            required: true
        },
        height:{
            type: DataTypes.INTEGER,
            required: true,
            notNull: true,
        },
        width:{
            type: DataTypes.INTEGER,
            required: true,
            notNull: true
        },
        crop_name:{
            type:DataTypes.STRING,
            notNull: true,
            required: true
        }
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false
    })

    return archieveData;

}