module.exports = (sequelize, DataTypes) => {

    const bookData = sequelize.define("bookdata", {
        list_name: {
            type: DataTypes.STRING,
            notNull: true,
            required: true,
        },
        bestsellers_date: {
            type: DataTypes.DATEONLY,
            required: true,
            notNull: true,
        },
        published_date: {
            type: DataTypes.DATEONLY,
            required: true,
            notNull: true
        },
        rank:{
            type: DataTypes.INTEGER,
            required: true,
            notNull: true,
        },
        description:{
            type: DataTypes.STRING,
            required: true,
            notNull: true,
        },
        author_name:{
            type:DataTypes.STRING,
            notNull: true,
            required: true
        }
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false
    })

    return bookData;

}