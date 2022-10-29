// Interface creada para definir los objetos y los tipos de datos

import { Document } from "mongoose";

export interface Task extends Document{
    id?: number;
    title: string;
    description: string;
    done: boolean;
}