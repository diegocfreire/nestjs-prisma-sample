import { Controller, Get, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { UsersService } from './users.service'

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  async findMany() {
    const data = await this.usersService.findMany()
    return {
      data,
      success: true,
    }
  }

  @Get('/findUnique')
  async findUnique(@Query('email') email: string) {
    const data = await this.usersService.findUnique(email)
    return {
      data,
      success: true,
    }
  }
}
