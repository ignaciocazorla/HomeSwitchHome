const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const SubastaSchema = new Schema({
    monto_minimo: { type: Number },
    puja_id: { type: ObjectId },
    fecha_creacion: { type: Date, default: Date.now },
    fecha_finalizacion: { type: Date },
    reserva_id: { type: ObjectId }
})

module.exports = model('Subasta', SubastaSchema)