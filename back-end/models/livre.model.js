export default (connection, DataTypes) => {
    connection.define(
        'Livre',
        {
            titre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            dateParution: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        { timestamps: true }
    );
}