module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("api", {
        user_id:{
                type: DataTypes.INTEGER,
                // autoIncrement: true,
                notNull: true,
                primeryKey:true
         },
        name: {
            type: DataTypes.STRING,
            notNull: true,
            required: true
        },
        email: {
            type: DataTypes.STRING,
            required: true,
            unique: true,
            notNull: true,
        },
        data: {
            type: DataTypes.STRING,
            notNull: true,
            required: true
        }
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false
    })

    return User;

}