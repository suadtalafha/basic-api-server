'use strict';

const Clothes=require('../models');

async function createClothes (req,res){
    let clothesInfo=req.body;
    let clothes=await Clothes.creat(clothesInfo);
    res.status(201).json(clothes)
};

async function getClothes (req,res){
    const id=parseInt(req.params.id);
    let clothes=await Clothes.findOne({where:{id:id}});
    res.status(200).json(clothes)
};

  
async function getAllClothes(req, res) {
    let allFood = await Clothes.findAll();
    res.status(200).json(allFood);
  }
    
  async function updateClothes (req , res) {
    const id = parseInt(req.params.id);
    let clothesData = req.body; 
    let clothes = await Clothes.findOne({where : {id}});
    let updateFood = await clothes.update(clothesData);
    res.status(200).json(updateFood);
  }
    
  async function deleteClothes (req , res) {
    const id = parseInt(req.params.id);
    let deleteClothes = await Clothes.destroy({where : {id}});
    res.status(204).json(deleteClothes);
  }
    
  module.exports = {
    createClothes,
    getClothes,
    getAllClothes,
    updateClothes,
    deleteClothes,
  };