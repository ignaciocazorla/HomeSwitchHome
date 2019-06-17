const Propiedad = require ('../models/propiedades')
const ctrlSemana = require('./semanas') 

const ctrl = {};

ctrl.all =  async (req,res) => {
    const propiedades = await Propiedad.find();
    res.json(propiedades)
};

ctrl.index = async (req,res) => {
    const propiedad = await Propiedad.findById({_id : req.params.propiedad_id});
    res.json(propiedad);
}

ctrl.crearMes = async (req) => {
    const p = await Propiedad.findOne({nombre : req.body.nombre})
    const fecha = new Date
    fecha.setMonth(fecha.getMonth() + 7) //crea para dentro de 7 meses, las semanas disponibles
    ctrlSemana.crearMes(p._id,fecha.getFullYear(),fecha.getMonth())
}

ctrl.crearProp = async (req) => {
    const propiedad = new Propiedad ({
        nombre: req.body.nombre,
        localidad:req.body.localidad,
        provincia: req.body.provincia,
        descripcion: req.body.descripcion
    })
    await propiedad.save(); 
    
}

ctrl.create = async (req,res) => {
    ctrl.crearProp(req)
    ctrl.crearMes(req)
    res.json('Recibido')
}

ctrl.modify =  async (req,res) => {
    const {nombre , localidad,
    provincia, descripcion } = req.body;
    await Propiedad.findOneAndUpdate(propiedad_id = Propiedad.id,
        {   nombre : nombre,
            localidad: localidad,
            provincia: provincia,
            descripcion: descripcion
        })
        res.json('Recibido')
}

ctrl.remove = async (req,res) => { //modificar para que sea baja logica
    const id = req.params.propiedad_id;
    const subastas = Subastas.find(Subastas.propiedad_id = id)
    if(!subastas){
    Propiedad.remove({_id: id})
    .exec()
    .then(result => {result.status(200).json(result);})
    .catch(err =>{console.log(err);
        res.status(500).json({error: err})});
    } else{
        res.json('Esta propiedad no puede eliminarse porque tiene subastas pendientes.')
    }
}

ctrl.removeAll = (req,res) => {

    Propiedad.deleteMany({ __v : 0})
    res.json('Hecho. Borrado de propiedades terminado.')
}


module.exports = ctrl