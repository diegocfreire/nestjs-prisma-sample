import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/config/database/prisma.service'
import { UserDTO } from './dtos/user.dto'
import { IUsersInterface } from './interface/users.interface'

@Injectable()
export class UsersRepository implements IUsersInterface {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<UserDTO[]> {
    return await this.prismaService.user.findMany({
      include: {
        profile: true,
      },
    })
  }

  async findUnique(email: string): Promise<UserDTO> {
    return await this.prismaService.user.findUnique({
      where: {
        email,
      },
      include: {
        profile: true,
      },
    })
  }

  create(data: UserDTO): Promise<UserDTO> {
    throw new Error('Method not implemented.')
  }

  update(data: UserDTO): Promise<void> {
    throw new Error('Method not implemented.')
  }

  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
