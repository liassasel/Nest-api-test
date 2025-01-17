import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser(@Body() userData: { email: string; name?: string }) {
        return this.usersService.createUser(userData.email, userData.name);
    }

    @Get()
    async getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id);
    }

    }

