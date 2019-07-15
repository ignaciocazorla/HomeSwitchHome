const Usuario = require ('../models/usuarios')

const ctrlUsuario = {}

ctrlUsuario.all = async (req,res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

ctrlUsuario.index = async (req,res) => {
    const usuario = await Usuario.findOne({email: req.body.email})
    res.json(usuario)
}

ctrlUsuario.create = async (req,res) => {
    const usuario = new Usuario({
        email: req.body.email,
        password: req.body.password,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        creditos: 20,
        tipo: req.body.tipo,
        tipo_suscripcion: req.body.tipo_suscripcion
    })
    const usuarios = await Usuario.findOne({email:usuario.email})
    if(!usuarios){
        await usuario.save() //sacar comentario para guardar usuarios
        res.json('usuario guardado')
    }else{
        res.json('EL usuario no se pudo guardar.')
    }
} 

ctrlUsuario.altaPremium = async (req,res) => {
    await Usuario.findByIdAndUpdate({_id: req.params.usuario_id},{tipo_suscripcion : true})
    res.json('Recibido')
}

ctrlUsuario.bajaPremium = async (req,res) => {
    await Usuario.findByIdAndUpdate({_id: req.params.usuario_id},{tipo_suscripcion : false})
    res.json('Recibido')
}

module.exports = ctrlUsuario
