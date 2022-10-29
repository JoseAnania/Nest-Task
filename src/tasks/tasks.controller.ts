// Controlador creado para manejar las peticiones referidas a Tasks (localhost:3000/tasks)

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

// importamos las clases DTO
import { CreateTaskDto } from './dto/create-task.dto';

// importamos el Servicio
import { TasksService } from './tasks.service';

// importamos la Interface
import { Task } from './interfaces/task';

@Controller('tasks')
export class TasksController {

    // inyectamos el Servicio creando el método constructor
    constructor(private taskService: TasksService) {}

    @Get('/test') // definimos la ruta de método GET que devuelve todas las Tareas(quedaría: localhost:3000/tasks/test)
    getTasks(): Promise<Task[]> { // definimos el nombre del método que devuelve un arreglo de Tasks (definido en la interface)
        
        return this.taskService.getTasks(); // llamamos al método del Servicio
    }

    @Get(':id')
    getTask(@Param('id') id: string) { // definimos el nombre del método que devuelve una Tarea
        
        return this.taskService.getTask(id); // llamamos al método del Servicio
    }

    @Post() // sin definir ruta (quedaría localhost:3000/tasks)
    createTask(@Body() task: CreateTaskDto): Promise<Task> { // método POST que recibe un cuerpo en la petición (enviado por Postman) de nombre "task" de tipo CreateTaskDto 

        return this.taskService.createTask(task); 
    }

    @Delete(':id')
    deleteTask(@Param('id') id): string { // método DELETE que recibe un parámetro en la petición (enviado por Postman) de nombre "id" de tipo CreateTaskDto 

        return `Borrando una Tarea: ${id}`;
    }

    @Put(':id')
    updateTask(@Body() task: CreateTaskDto, @Param('id') id): string { // método PUT que recibe un cuerpo y un parámetro en la petición (enviado por Postman)

        console.log(task);
        console.log(id);
        return 'Actualizando una Tarea';
    }
}
