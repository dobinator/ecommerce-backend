// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {  // one to one
  foreignKey: "category_id",

})

Category.hasMany(Product, {  //one to many
  foreignKey: "category_id",
})

Product.belongsToMany(Tag, {  // many to many
  through: ProductTag,
  foreignKey: "product_id",
})

Tag.belongsToMany(Product,{  //many to many
   through: ProductTag,
   foreignKey: "tag_id",
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};