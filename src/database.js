//IMPORTAR MONGOOSE
import mongoose from 'mongoose'

//PERMITIR QUE SOLO LOS CAPOS DEL SCHEMAL SEAN ALMACENADOS
// EN LA BDD
mongoose.set('strictQuery', true)

//CREAR UNA FUNCION LLAMADA CONNECTION
const connection = async()=>{
    try {
        // ESTABLECER LA CONEXION CON LA BDD
        const {connection} = await mongoose.connect(process.env.MONGODB_URI)
        // PRESENTAR LA CONEXION EN CONSOLA
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        // CAPTURA ERROR EN LA CONEXION
        console.log(error);
    }
}

export default  connection