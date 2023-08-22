import * as mongoose from 'mongoose';

export const ControlSchema = new mongoose.Schema({
  modelo: { type: String, required: true },
  matricula: { type: String, required: true },
  aerolinea: { type: String, required: true },
  capacidad: { type: String, required: true },
  estado: { type: Boolean, required: true },
}, {timestamps: true});