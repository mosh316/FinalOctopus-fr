const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

const Fruit=require('../../models/fruit');



router.post('/', async (req, res, next) => {
    console.log("it is in post");
    const fruit = new Fruit({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      qty: req.body.qty,
      rating: req.body.rating,
      microsieverts: req.body.microsieverts
    });
  
    try {
      const result = await fruit.save();
      console.log(result);
      res.status(201).json({ message: 'Fruit created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  });
  router.get('/1', async (req, res, next) => {
    console.log("it is in get");
    try {
      const fruit = await Fruit.findById('1');
      res.status(200).json({
        message: 'Handling Get requests to /fruits',
        data: fruit
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  });
  
 router.get('/', async (req, res, next) => {
  console.log("it is in get");
  try {
    const fruits = await Fruit.find().lean().exec();
    res.status(200).json(fruits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
  
  
  router.get('/id/:id', async (req, res, next) => {
    console.log("it is in get");
    const id = req.params.id;
    try {
      let data = await Fruit.findById(id);
      res.status(200).json({ message: 'handling Get requests to /fruits', data: data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
});

router.put('/put',async (req,res,next)=>{
    
    let data=await Fruit.updateOne(req.params,{$set:req.body});

    res.send(data);
    res.status(200).json({message:'deleting a fruit'});
});

router.delete('/delete/:id',async (req,res,next)=>{
    const id=req.params.id;
    let data=await Fruit.deleteOne(req.params);
    res.send(data);
    res.status(200).json({message:'deleting a fruit'});
});
module.exports=router;