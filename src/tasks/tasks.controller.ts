import { Body, Controller, Delete, Get, Post, Param, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllsTasks() {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: createTaskDto) {
        return this.tasksService.createTask(newTask.title, newTask.description);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        return this.tasksService.deleteTask(id);
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updatedFields: updateTaskDto) {
        return this.tasksService.updateTask(id, updatedFields); // Llamada correcta a la función updateTask
    }
}
