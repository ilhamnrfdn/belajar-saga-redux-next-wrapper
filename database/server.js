import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const {connection} = await mongoose.connect(process.env.CONNECT_MONGO)
    // READYSTATE MENGEMBALIKA 3 VALUE :
    // 0 DISCONNECT, 1 CONNECTED, 2 CONNECTING, 3 DISCONNECTING
    if(connection.readyState == 1) {
      return Promise.resolve(true)
    }
  } catch (error) {
    return  Promise.reject(error);
  }
}

export default connectMongo;