import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from 'src/config/database/prisma.service'
import { IUsersInterface } from './interface/users.interface'

@Injectable()
export class UsersRepository implements IUsersInterface {
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

  create(data: User): Promise<User> {
    throw new Error('Method not implemented.')
  }

  update(data: User): Promise<void> {
    throw new Error('Method not implemented.')
  }

  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
