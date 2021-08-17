'use strict';

const Food = (sequelize , DataTypes) =>sequelize.define('Food' ,{
    foodName: {
      type : DataTypes.STRING,
      allowNull: false,
    },
    flavour : {
      type : DataTypes.STRING,
    },
  
  } );
  
  module.exports= Food;