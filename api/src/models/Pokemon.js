const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    hp: {
      type: DataTypes.INTEGER
    },
    fuerza: {
      type: DataTypes.INTEGER
    },
    defensa: {
      type: DataTypes.INTEGER
    },
    velocidad: {
      type: DataTypes.INTEGER
    },
    peso: {
      type: DataTypes.INTEGER
    },
    altura: {
      type: DataTypes.INTEGER
    },
    tipo: {
      type: DataTypes.ENUM('grass', 'fire', 'rock', 'normal', 'ground','fighting', 'flying', 'poison', 'bug', 'ghost', 'steel', 'water', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow'),
      allowNull: false
    },
    tipo2: {
      type: DataTypes.ENUM('grass', 'fire', 'rock', 'normal', 'ground','fighting', 'flying', 'poison', 'bug', 'ghost', 'steel', 'water', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow'),
    },
    url: {
      type: DataTypes.STRING
    },
    id: {
      type: DataTypes.INTEGER
    }
  });
};

