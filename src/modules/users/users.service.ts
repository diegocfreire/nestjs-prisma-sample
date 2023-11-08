import { Injectable } from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule'
import { UserDTO } from './dtos/user.dto'
import { UsersRepository } from './users.repository'

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async findMany(): Promise<UserDTO[]> {
    return await this.usersRepository.findMany()
  }

  async findUnique(email: string): Promise<UserDTO> {
    return await this.usersRepository.findUnique(email)
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  testeCron() {
    console.log('Cron - ', new Date())
  }
}
