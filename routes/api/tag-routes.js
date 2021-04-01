const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include:[
    {
      model: Product, 
      through: ProductTag,
    }]
  }).then((TagData) =>{
    res.json(TagData);
  });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where:{
    id: req.params.id
    },
    include:[
    {
      model: Product, 
      through: ProductTag
    } ],
   }).then((TagData) =>{
     res.json(TagData);
   });
});

router.post('/', (req, res) => {
  Tag.create (req.body)
.then((TagData) =>{
  res.json(TagData);
});
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where:{
      id: req.params.id
      },
  })
  .then((TagData) =>{
    res.json(TagData);
  });
});

router.delete('/:id', (req, res) => {
  Tag.destroy ({
    where:{
      id: req.params.id
      },
  })
  .then((TagData) =>{
    res.json(TagData);
  });
});

module.exports = router;