const mongoose = require("mongoose");

const bugSchema = mongoose.Schema({
  name: String,
  details: String,
  steps: String,
  version: String,
  priority: Number,
  assigned: String,
  creator: String,
  status: String,
  time: String,

});

const Bug = mongoose.model("bug", bugSchema);

// exports.getAllbugs = async function () {
//   try {
//     let bugs = Bug.find();
//     return bugs;
//   } catch (err) {
//     console.log(err);
//   }
// };

exports.getProductsById = async function (id) {
  try {
    let product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
  }
};

exports.getProductsByCategory = async (category)=> {
  try {
    let products = await Product.find({category});
    return products;
  } catch (err) {
    console.log(err);
  }
}

exports.addProduct = async function({}){
  try{
    let product = await Product.create({})
    console.log("product created in database")

  }catch(err){console.log(err)}
}


module.exports = {
  insertBug: Bug => {
    let newBug = new Bug(Bug);
    return newBug.save();
  },

  getAllBugs: (top) => {
    return Bug.find({}).sort({ addedAt: '-1'}).limit(top);
  },

  getBugById: id => {
    return Bug.findById(id);
  },

  getBugsByOption: (obj) => {
    return  Bug.find(obj)
  },

  updateBug: (id, Bug) => {
    return Bug.findByIdAndUpdate(id, Bug);
  },

  deleteBug: id => {
    return Bug.deleteOne({ _id: id });
  }
};