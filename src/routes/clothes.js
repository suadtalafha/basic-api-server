'use strict';

const express=require('express');
const router = express.Router();

const {
    createClothes,
    getClothes,
    getAllClothes,
    updateClothes,
    deleteClothes,
}=require('../implementation/food-implementation');

router.get('/clothes', getAllClothes);
router.post('/clothes', createClothes);
router.get('/clothes/:id', getClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

module.exports = router;