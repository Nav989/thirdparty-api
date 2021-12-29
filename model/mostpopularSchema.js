module.exports = (sequelize, DataTypes) => {

    const mostpopulerData = sequelize.define("mostpopuler", {
        url: {
            type: DataTypes.STRING,
            notNull: true,
            required: true,
        },
        source: {
            type: DataTypes.STRING,
            required: true,
            notNull: true,
        },
        published_date: {
            type: DataTypes.DATEONLY,
            required: true,
            notNull: true
        },
        title:{
            type: DataTypes.STRING,
            required: true,
            notNull: true,
        },
        abstract:{
            type: DataTypes.STRING,
            required: true,
            notNull: true,
        }
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false
    })

    return mostpopulerData;

}