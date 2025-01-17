import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
    async createUser(email: string, name?: string) {
        return prisma.user.create({
            data: {
                email,
                name,
            },
        });
    }

    async getAllUsers() {
        return prisma.user.findMany();
    }
}
