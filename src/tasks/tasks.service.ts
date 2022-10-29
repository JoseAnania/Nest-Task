// Servicio generado para manejar la lógica de las Tasks (que se llamarán desde el Controller)

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// importamos la Interface que define los objetos y tipos de datos
import { Task } from './interfaces/task';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {

    // creamos un constructor para inyectar el esquema
    constructor(@InjectModel('Task') private TasksModel: Model<Task>) {}

    async getTasks() {

        return await this.TasksModel.find();
    }

    async getTask(id: string) {

        return await this.TasksModel.findById(id);
    }

    async createTask(task: CreateTaskDto) {
        
        const newTask = new this.TasksModel(task)

        return await newTask.save();
    }
}
