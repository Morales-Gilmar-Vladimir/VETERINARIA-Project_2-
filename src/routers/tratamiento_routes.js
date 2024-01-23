import {Router} from 'express'
const router = Router()
import verificarAutenticacion from "../middlewares/autenticacion.js";
import { validacionTratamiento } from '../middlewares/validacionTratamiento.js';

import {
    detalleTratamiento,
    registrarTratamiento,
    actualizarTratamiento,
    eliminarTratamiento,
    cambiarEstado
} from "../controllers/tratamiento_controller.js";


router.post('/tratamiento/registro',verificarAutenticacion,validacionTratamiento,registrarTratamiento)
router
    .route('/tratamiento/:id')
    .get(verificarAutenticacion,detalleTratamiento)
    .put(verificarAutenticacion,actualizarTratamiento)
    .delete(verificarAutenticacion,eliminarTratamiento)

router.put('/tratamiento/estado/:id',verificarAutenticacion,cambiarEstado)


router.post('/tratamiento/registro',(req,res)=>res.send("Registrar tratamientos"))
router.get('/tratamiento/:id',(req,res)=>res.send("Detalle del tratamiento"))
router.put('/tratamiento/:id',(req,res)=>res.send("Actualizar tratamiento"))
router.delete('/tratamiento/:id',(req,res)=>res.send("Eliminar tratamiento"))
router.post('/tratamiento/estado/:id',(req,res)=>res.send("Listar tratamientos"))


export default router