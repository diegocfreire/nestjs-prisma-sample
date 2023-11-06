import { Controller, Get, Query, Req } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { User } from 'src/dto/user'
import { UsersService } from './users.service'

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  @ApiOkResponse({ type: User, isArray: true })
  async findMany(): Promise<User[]> {
    return await this.usersService.findMany()
  }

  @Get('/findUnique')
  @ApiOkResponse({ type: User })
  async findUnique(
    @Query('email') email: string,
    @Req() request: any,
  ): Promise<User> {
    return await this.usersService.findUnique(email)
  }
}
