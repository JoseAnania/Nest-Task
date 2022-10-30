// Módulo autogenerado principal de la aplicación

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TasksModule,
    // conexión a MongoDB según documentación
    MongooseModule.forRoot('mongodb+srv://dbUser:elvichito01@cluster0.8bihr.mongodb.net/test')
  ],
  controllers: [AppController, TasksController],
  providers: [AppService],
})
export class AppModule {}
