import { Injectable } from '@nestjs/common';
import { task, TaskStatus } from './task.entity';
import { v4 as uuidv4 } from 'uuid'; // Importar y renombrar la función v4 de uuid

@Injectable()
export class TasksService {
    
    private tasks: task[] = [
        {
            id: '1',
            title: 'first Task',
            description: 'some Task',
            status: TaskStatus.PENDING,
        },
    ];
    
    getAllTasks() {
        return this.tasks;
    }
    
    createTask(title: string, description: string) {
        const task: task = {
            id: uuidv4(), // Usar la función renombrada
            title,
            description,
            status: TaskStatus.PENDING, // Asumiendo que TaskStatus.PENDING existe en tu enum
        };
        
        this.tasks.push(task);
        return task;
    }
    
    updateTask() {
        // Agregar lógica para actualizar una tarea
    }
    
    deleteTask() {
        // Agregar lógica para eliminar una tarea
    }
}
