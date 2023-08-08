import mongoose  from "mongoose";
export async function connect(){
  try {
    await mongoose.connect('mongodb+srv://adm:LlOG4C76BLEzgzej@cluster0.oyrvmhb.mongodb.net/')
  } catch (error) {
    console.log("esse é o erro: ", error);
    
  }
}