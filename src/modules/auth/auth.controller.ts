import { Body, Controller, Post } from '@nestjs/common'
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { AuthService } from 'src/modules/auth/auth.service'
import { Public } from './decorators/public.decorator'
import { AuthDTO, SignInDTO } from './dtos/auth.dto'

@ApiTags('*Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/signin')
  @ApiBody({ type: SignInDTO })
  @ApiOkResponse({ type: AuthDTO })
  signIn(@Body() body: SignInDTO) {
    return this.authService.signIn(body.email, body.password)
  }
}
