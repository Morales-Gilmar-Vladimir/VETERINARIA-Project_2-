// Importar jwt y nodelo
import jwt from 'jsonwebtoken'
import Veterinario from '../models/Veterinario.js'
import Paciente from '../models/Paciente.js'

// metodo para proteger rutas
const verificarAutenticacion = async (req,res,next)=>{
//VALIDACION SI SE ESTA ENVIANDO EL TOKEN
if(!req.headers.authorization) return res.status(404).json({msg:"Lo sentimos, debes proprocionar un token"})    
    // DESESTRUCTURAR EL TOJEN PERO DEL HEADERS
    const {authorization} = req.headers
    // CAPTURAR ERRORES
    try {
        //VERIFICAR EL TOKEN RECUPERADO CON EL ALMACENADO
        const {id,rol} = jwt.verify(authorization.split(' ')[1],process.env.JWT_SECRET)
        // VERIFICAR EL ROL
        if (rol==="veterinario"){
            // OBTENER EL USUARIO
            req.veterinarioBDD = await Veterinario.findById(id).lean().select("-password")
            // CONTINAR EL PROCESO
            next()
        }else{
            req.pacienteBDD = await Paciente.findById(id).lean().select("-password")
            next()
        }
    } catch (error) {
        // CAPTURAR ERRORES Y PRESENTARLOS
        const e = new Error("Formato del token no válido")
        return res.status(404).json({msg:e.message})
    }
}

//Exportar el metodo 
export default verificarAutenticacion