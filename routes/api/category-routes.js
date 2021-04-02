const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include:[Product]
  }).then((CategoryData) =>{
    res.json(CategoryData);
  });
    // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne({
   where:{
   id: req.params.id
   },
   include:[Product],
  }).then((CategoryData) =>{
    res.json(CategoryData);
  });
  
});

router.post('/',  (req, res) => {
  Category.create (req.body)
.then((CategoryData) =>{
  res.json(CategoryData);
});
  
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where:{
      id: req.params.id
      },
  })
  .then((CategoryData) =>{
    res.json(CategoryData);
  });

});

router.delete('/:id', (req, res) => {
 Category.destroy ({
  where:{
    id: req.params.id
    },
})
.then((CategoryData) =>{
  res.json(CategoryData);
});
})

module.exports = router;