'use strict';

const POSTEGER_URI=process.env.POSTEGER_URI ||"postgres://postgres@localhost:5432/postgres";

const { Sequelize, DataTypes } = require('sequelize');

const food =require('./food.model');
const clothes =require('./clothes.model');

var sequelize =new Sequelize(POSTEGER_URI , {})

module.exports ={
    db:sequelize,
    Food:food(sequelize, DataTypes ),
    Clothes:clothes(sequelize, DataTypes)
}