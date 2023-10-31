import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from '../../database/prisma.service'

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<User[] | undefined> {
    return await this.prismaService.user.findMany()
  }

  async findUnique(email: string): Promise<User | undefined> {
    return await this.prismaService.user.findUnique({
      where: {
        email,
      },
    })
  }
}
