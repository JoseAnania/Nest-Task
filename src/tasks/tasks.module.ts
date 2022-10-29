// Módulo generado para enlazar el Controlador con el Servicio de Tasks

import { Module } from '@nestjs/common';

// importamos el Servicio, el Controlador y Mongoose
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './schemas/tasks.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])],
    controllers: [TasksController],
    providers: [TasksService],
    exports: [TasksService]
})
export class TasksModule {}
