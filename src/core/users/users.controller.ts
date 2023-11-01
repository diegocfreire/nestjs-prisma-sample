import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/')
  findMany() {
    return this.usersService.findMany()
  }
}
