// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://goFood:shubham123@cluster0.no9t3x4.mongodb.net/gofood?retryWrites=true&w=majority'
// // mongodb+srv://goFood:<password>@cluster0.no9t3x4.mongodb.net/?retryWrites=true&w=majority

// const mongoDB = () =>{
// mongoose.connect(mongoURI, { useNewUrlParser: true },async(err, reult)=>{
//     if(err) console.log("---",err)
//     else{
//         console.log("connected");
//         const fetched_data = await mongoose.connection.db.collection("food_items");
//         fetched_data.find({}).toArray(async function(err,  data){
//              const foodCategory = await mongoose.connection.db.collection("food_items");
//              foodCategory.find({}).toArray(function (err,catData){
//                 if(err) console.log(err);
//                 else {
//                 global.food_items = data;
//                 global.foodCategory = catData;
//                 // console.log(global.food_items);
//             }
//             // if(err) console.log(err);
//             // else {
//             //     global.food_items = data;
//                 // console.log(global.food_items)
//             // }
//         })
//     }
    

// });

// }

// module.exports = mongoDB;

const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://goFood:shubham123@cluster0.no9t3x4.mongodb.net/gofood?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');

    const fetchedData = await mongoose.connection.db.collection('food_items');
    const data = await fetchedData.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection('food_items');
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongoDB;
