import { Injectable } from '@nestjs/common';
import { task, TaskStatus } from './task.entity';
import { v4 as uuidv4 } from 'uuid';

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
        const newTask: task = {
            id: uuidv4(),
            title,
            description,
            status: TaskStatus.PENDING,
        };
        
        this.tasks.push(newTask);
        return newTask;
    }
    
    deleteTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
    
    getTaskById(id: string): task {
        return this.tasks.find((task) => task.id === id);
    }
    
    updateTask(id: string, updatedFields: any) {
        
        const taskToUpdate = this.getTaskById(id);
        Object.assign(taskToUpdate, updatedFields);
        this.tasks = this.tasks.map((task) => (task.id === id ? taskToUpdate : task));
        return taskToUpdate;
    }
}
