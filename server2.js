// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/Laserdb",{useNewUrlParser:true});
// mongoose.set("strictQuery",false);
// const LaserSchema = new mongoose.Schema({
//     name:String,
//     rating:Number,
//     review:String
// });

// const Lasers = mongoose.model("Baker",LaserSchema);

// const laser  = new Lasers({
//     name:"MN jACKER",
//     rating:10,
//     review:"Pretty good"
// })

// laser.save();


// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/LaserTest", { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.set("strictQuery",false);
// const Person =  new mongoose.Schema({
//        name  : String,
//        age:Number,
  
// });

// const Persons = mongoose.model("Person",Person);
// const person = new Persons({
//     name:"Ana Default",
//     age:20,
//     // Family:false

// })

// person.save();


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));




























const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/BuyDb");
mongoose.set("strictQuery",false);


const fruitschema = new mongoose.Schema({
    fruitname:String,
    Rate:Number
})

const Fruit  =   mongoose.model("Fruit",fruitschema);
const fruit1 =  new Fruit({
    fruitname:"apple",
    rate:10
}) 


fruit1.save()

const NewPerson = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"plz check your data entry no name specified"]},//required to give the datatype when creating the sche
    rating:{
        type:Number,
        min:1,
        max:10,
        //validating
    },
    favouriteFruit: fruitschema
});
const newperson = mongoose.model("Person",NewPerson);
const person1 =  new newperson({
    name:"test",
    rating:2,
    //Relationshhip in mongodb
    favouriteFruit:fruit1
  
})

person1.save();



// if (person1.rating>10){
//     try{
//         console.log("it should be between 0-10");
//     }catch(err){
//         console.log(err)
//     }
// }
// person1.save()
// setTimeout(() => {
//     newpersons.save().then(()=>{console.log("Iam alive")})
// }, 2000);


// newperson.insertMany([person1,person2,person3],(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("all has been saved to the database  :) ")
//     }
// })

//Reading from the database ==> function that take 2 parameters 1-> err and second is teh data

// newperson.find((err,variable)=>{
//     if(err){
//         console.log(err)
//     }else{
       
//         variable.map((x)=>{console.log(x.name)})
//     }
// })
// newperson.deleteMany({name:"Baker"},(err)=>{
//     if(err){
//         console.log(`an ${err} ocuured `)
//     }else{
//         mongoose.connection.close();
//         console.log("Deleted succesfully")
//     }
// })
// mongoose.connection.close();
//establishing realtionship in mongodb


