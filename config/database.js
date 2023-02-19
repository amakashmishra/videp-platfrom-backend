import mongoose from "mongoose";


export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB connected with ${connection.host}`);
};



// mongoose.set('strictQuery', true);
// export const connectDB = () => {
//     mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true}).then((data) => {
//         console.log(`MongoDB server is connected with ${data.connection.host}`);
//     })
// }