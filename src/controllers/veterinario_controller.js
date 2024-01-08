import Veterinario from "../models/Veterinario.js"
//metodo para el login
const login =(req,res)=>{
    res.status(200).json({res:'login del veterinario'})
}
//metodo para mostrar el perfil
const perfil=(req,res)=>{
    res.status(200).json({res:'perfil del veterinario'})
}
//Metodo para registro
const registro = async (req,res)=>{
    //desestructurar los campos
    const {email,password} = req.body
    // Validar todos los campos llenos
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    // Obtener el usuario de la BDD en base al email
    const verificarEmailBDD = await Veterinario.findOne({email})
    //validar que el email sea nuevo
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    // crear la instancia del veterinario
    const nuevoVeterinario = new Veterinario(req.body)
    nuevoVeterinario.password = await nuevoVeterinario.encrypPassword(password)
    nuevoVeterinario.crearToken()
    
    await nuevoVeterinario.save()
    res.status(200).json({nuevoVeterinario})
}
//metodo para confirmar token
const confirmEmail = (req,res)=>{
    res.status(200).json({res:'confirmar email de registro de veterinario'})
}
// metodo par alistar veterinarios
const listarVeterinarios = (req,res)=>{
    res.status(200).json({res:'lista de veterinarios registrados'})
}

//metodo para mostrar detalle de un veterinario en particular 
const detalleVeterinario = (req,res)=>{
    res.status(200).json({res:'detalle de un eterinario registrado'})
}
// metood para actualizar el perfil 
const actualizarPerfil = (req,res)=>{
    res.status(200).json({res:'actualizar perfil de un veterinario registrado'})
}
//Metodo para actualizar password
const actualizarPassword = (req,res)=>{
    res.status(200).json({res:'actualizar password de un veterinario registrado'})
}
//metodo para recuperar password
const recuperarPassword= (req,res)=>{
    res.status(200).json({res:'enviar mail recuperación'})
}
//metodo para comprobar el token
const comprobarTokenPasword= (req,res)=>{
    res.status(200).json({res:'verificar token mail'})
}
//metodo para crear nuevo password
const nuevoPassword= (req,res)=>{
    res.status(200).json({res:'crear nuevo password'})
}

export {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
	recuperarPassword,
    comprobarTokenPasword,
	nuevoPassword
}