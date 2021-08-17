'use strict';

const Food=require('../models');

async function createFood (req,res){
    let FoodInfo=req.body;
    let food=await Food.creat(FoodInfo);
    res.status(201).json(food)
};

async function getFood (req,res){
    const id=parseInt(req.params.id);
    let food=await Food.findOne({where:{id:id}});
    res.status(200).json(food)
};

  
async function getAllFood(req, res) {
    let allFood = await Food.findAll();
    res.status(200).json(allFood);
  }
    
  async function updateFood (req , res) {
    const id = parseInt(req.params.id);
    let foodData = req.body; 
    let food = await Food.findOne({where : {id}});
    let updateFood = await food.update(foodData);
    res.status(200).json(updateFood);
  }
    
  async function deleteFood (req , res) {
    const id = parseInt(req.params.id);
    let deleteFood = await Food.destroy({where : {id}});
    res.status(204).json(deleteFood);
  }
    
  module.exports = {
    createFood,
    getFood,
    getAllFood,
    updateFood,
    deleteFood,
  };