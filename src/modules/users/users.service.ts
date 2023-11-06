import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../config/database/prisma.service'
import { User } from './dtos/user'

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<User[]> {
    return await this.prismaService.user.findMany({
      include: {
        profile: true,
      },
    })
  }

  async findUnique(email: string): Promise<User> {
    return await this.prismaService.user.findUnique({
      where: {
        email,
      },
      include: {
        profile: true,
      },
    })
  }
}
