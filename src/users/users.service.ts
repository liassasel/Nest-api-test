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

    async deleteUser(id: number) {
        try {
            const user = await prisma.user.delete({
                where: {
                    id: id,
                },
            });
            return user;
        }catch (error) {
            throw new Error(`User with id ${id} not found`);
        }
    }
}
