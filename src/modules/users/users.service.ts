import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../config/database/prisma.service'
import { UserDTO } from './dtos/user.dto'
import { UsersRepository } from './users.repository'

@Injectable()
export class UsersService {
  constructor(
    private prismaService: PrismaService,
    private usersRepository: UsersRepository,
  ) {}

  async findMany(): Promise<UserDTO[]> {
    return await this.usersRepository.findMany()
  }

  async findUnique(email: string): Promise<UserDTO> {
    return await this.usersRepository.findUnique(email)
  }
}
