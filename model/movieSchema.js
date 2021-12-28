module.exports = (sequelize, DataTypes) => {

    const movieData = sequelize.define("moviedata", {
        display_title: {
            type: DataTypes.STRING,
            notNull: true,
            required: true,
        },
        headline: {
            type: DataTypes.STRING,
            required: true,
            notNull: true,
        },
        publication_date: {
            type: DataTypes.STRING,
            notNull: true,
            required: true
        },
        opening_date:{
            type: DataTypes.STRING,
            notNull: true,
            required: true
        },
        date_updated:{
            type: DataTypes.STRING,
            notNull: true,
            required: true
        }
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false
    })

    return movieData;

}