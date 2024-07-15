/* L’API Rest et la Base de données : Créer un modèle Sequelize */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Pokemon', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cp: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false
        },
        types: {
            type: DataTypes.STRING,
            allowNull: false,
            // Getter : Base de données > API Rest
            get() {
                return this.getDataValue('types').split(',') // "Plante, Poison".split(',') --> ["Plante", "Poison"]
            },
            // Setter : API Rest > Base de données
            set(types) {
                this.setDataValue('types', types.join()) // ["Plante", "Poison"].join() --> "Plante, Poison"
            }
        }
        }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
        })
}