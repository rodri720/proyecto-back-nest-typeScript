import { Body, Controller,Get ,Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    @Get() 
        getAllsTasks() {
            return this.tasksService.getAllTasks();
    }
    @Post()
    createTask(@Body() newTask: any) {
        console.log(newTask);
        return 'guardando tarea';
        
    }
}
