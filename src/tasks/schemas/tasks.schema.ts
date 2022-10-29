// Esquema creado para definir el modelo de la BD

import { Schema } from "mongoose";

// creamos el nuevo esquema en una constante TaskSchema (el id es autogenerado)
export const TaskSchema = new Schema({
    title: String,
    description: String,
    done: Boolean
});











