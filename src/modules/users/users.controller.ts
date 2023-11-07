import { Controller, Get, Query, Req } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { UserDTO } from 'src/modules/users/dtos/user.dto'
import { UsersService } from './users.service'

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  @ApiOkResponse({ type: UserDTO, isArray: true })
  async findMany(): Promise<UserDTO[]> {
    return await this.usersService.findMany()
  }

  @Get('/findUnique')
  @ApiOkResponse({ type: UserDTO })
  async findUnique(
    @Query('email') email: string,
    @Req() request: any,
  ): Promise<UserDTO> {
    return await this.usersService.findUnique(email)
  }
}
