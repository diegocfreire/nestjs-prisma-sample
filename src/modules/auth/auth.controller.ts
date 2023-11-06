import { Body, Controller, Post } from '@nestjs/common'
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { AuthService } from 'src/modules/auth/auth.service'
import { Auth, SignIn } from 'src/modules/auth/dtos/auth'
import { SignInInterface } from 'src/modules/auth/interface/auth.interface'
import { Public } from './decorators/public.decorator'

@ApiTags('*Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/signin')
  @ApiBody({ type: SignIn })
  @ApiOkResponse({ type: Auth })
  signIn(@Body() body: SignInInterface) {
    return this.authService.signIn(body.email, body.password)
  }
}
