import { Body, Controller, Post } from '@nestjs/common'
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { SignInInterface } from 'src/common/interface/auth.interface'
import { AuthService } from 'src/core/auth/auth.service'
import { Auth, SignIn } from 'src/dto/auth'
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
